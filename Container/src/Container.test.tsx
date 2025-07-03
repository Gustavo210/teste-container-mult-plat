import '@testing-library/jest-native/extend-expect'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'
import { Text } from 'react-native'

import { Container } from '.'
import { ContainerBox } from './components/ContainerBox'
import { ContainerMain } from './components/ContainerMain'
import { calculateAvailableSpace, getAlignmentStyles } from './components/utils'

describe('Container component tests', () => {
  it('should match snapshot with default variant', () => {
    const { toJSON } = render(
      global.app(
        <Container>
          <Text>Default</Text>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should match snapshot with variant="MAIN"', () => {
    const { toJSON } = render(
      global.app(
        <Container variant="MAIN">
          <Text>Main Variant</Text>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should match snapshot with variant="BOX" and direction="COLUMN"', () => {
    const { toJSON } = render(
      global.app(
        <Container variant="BOX" direction="COLUMN">
          <Text>Box Column</Text>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should match snapshot with direction="ROW"', () => {
    const { toJSON } = render(
      global.app(
        <Container direction="ROW">
          <Text>Row</Text>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should align content to center visually with align="CENTER"', () => {
    const { toJSON } = render(
      global.app(
        <Container>
          <Container size="SM" align="CENTER">
            <Text>Centralizado</Text>
          </Container>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should align content to the right visually with align="RIGHT"', () => {
    const { toJSON } = render(
      global.app(
        <Container>
          <Container size="SM" align="RIGHT">
            <Text>Right Aligned</Text>
          </Container>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should apply flex-basis when sizeKey is provided', () => {
    const { toJSON } = render(
      global.app(
        <Container>
          <Container size="SM">
            <Text>Sized</Text>
          </Container>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should not affect alignment from parent align prop', () => {
    const { getAllByTestId } = render(
      global.app(
        <Container align="CENTER">
          <Container size="SM">
            <Text>Inner</Text>
          </Container>
        </Container>
      )
    )
    const wrappers = getAllByTestId('flex-item-wrapper')
    const childWrapper = wrappers[1]
    expect(childWrapper).toBeTruthy()
    expect(childWrapper).not.toHaveStyle({ justifyContent: 'center' })
  })

  it('should render multiple children correctly', () => {
    const { getByText } = render(
      global.app(
        <Container>
          <Text>One</Text>
          <Text>Two</Text>
        </Container>
      )
    )
    expect(getByText('One')).toBeTruthy()
    expect(getByText('Two')).toBeTruthy()
  })

  it('should distribute space equally between children by default', () => {
    const { getAllByTestId } = render(
      global.app(
        <Container>
          <Container>
            <Text>Child 1</Text>
          </Container>
          <Container>
            <Text>Child 2</Text>
          </Container>
        </Container>
      )
    )
    const wrappers = getAllByTestId('flex-item-wrapper')
    const [child1, child2] = [wrappers[1], wrappers[2]]
    expect(child1.props.style).toMatchObject({ flexGrow: 1 })
    expect(child2.props.style).toMatchObject({ flexGrow: 1 })
  })

  it('should render plain string child without crashing', () => {
    const { getByText } = render(
      global.app(
        <Container>
          <Text>One</Text>
        </Container>
      )
    )
    expect(getByText('One')).toBeTruthy()
  })

  it('should apply default gapSize (MD) when gap is not provided', () => {
    const { toJSON } = render(
      global.app(
        <Container variant="BOX" direction="ROW">
          <Text>Child 1</Text>
          <Text>Child 2</Text>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should apply specific gap when gap="LG"', () => {
    const { toJSON } = render(
      global.app(
        <Container variant="BOX" direction="ROW" gap="LG">
          <Text>With LG Gap</Text>
          <Text>Another</Text>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should fallback to 0px gap when gap is invalid', () => {
    const { toJSON } = render(
      global.app(
        <Container variant="BOX" direction="ROW" gap={'INVALID' as never}>
          <Text>Invalid Gap</Text>
          <Text>Another</Text>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should skip invalid children', () => {
    const { toJSON } = render(
      global.app(
        <Container>
          {null}
          {false}
          {'just text'}
          <Container>
            <Text>Valid</Text>
          </Container>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should fallback to 1 column if theme.columns[size] is undefined', () => {
    const { toJSON } = render(
      global.app(
        <Container direction="ROW">
          <Container size={'INVALID' as never}>
            <Text>Fallback Columns</Text>
          </Container>
        </Container>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should apply debug border styles when debug is true', () => {
    const { getAllByTestId } = render(
      global.app(
        <Container direction="ROW" debug>
          <Container size="SM">
            <Text>Debug Border</Text>
          </Container>
        </Container>
      )
    )
    const wrappers = getAllByTestId('flex-item-wrapper')
    const debugWrapper = wrappers[0]
    expect(debugWrapper).toHaveStyle({
      borderWidth: 1,
      borderColor: 'red',
      borderStyle: 'solid'
    })
  })
})

describe('FlexBox component tests', () => {
  it('should grow flexibly when sizeKey is not provided', () => {
    const { getAllByTestId } = render(
      global.app(
        <Container>
          <Container>
            <Text>Flexible</Text>
          </Container>
        </Container>
      )
    )
    const wrappers = getAllByTestId('flex-item-wrapper')
    const childWrapper = wrappers[1]
    expect(childWrapper).toBeTruthy()
    expect(childWrapper.props.style).toMatchObject({ flexGrow: 1 })
  })

  it('should trigger onLayout and calculate available space', async () => {
    const { getAllByTestId, toJSON } = render(
      global.app(
        <Container>
          <Container size="SM" align="CENTER">
            <Text>Layout Event</Text>
          </Container>
        </Container>
      )
    )

    const wrapper = getAllByTestId('flex-item-wrapper')[0]
    const container = wrapper.parent

    fireEvent(container, 'layout', {
      nativeEvent: { layout: { width: 300 } }
    })

    await waitFor(() => {
      expect(wrapper).toBeTruthy()
    })

    expect(toJSON()).toMatchSnapshot()
  })

  it('should trigger availableSpace and calculate childAvailableSpace', async () => {
    const { getAllByTestId, toJSON } = render(
      global.app(
        <Container direction="ROW">
          <Container size="SM" align="LEFT">
            <Text>Child</Text>
          </Container>
        </Container>
      )
    )

    const wrapper = getAllByTestId('flex-item-wrapper')[0]
    const container = wrapper.parent

    fireEvent(container, 'layout', {
      nativeEvent: { layout: { width: 320 } }
    })

    await waitFor(() => {
      expect(wrapper).toBeTruthy()
    })

    expect(toJSON()).toMatchSnapshot()
  })

  it('should apply width: auto when noFlex is true', () => {
    const { toJSON } = render(
      global.app(
        <Container direction="ROW" noFlex={true}>
          <Container size="MD">
            <Text>NoFlex Test</Text>
          </Container>
        </Container>
      )
    )
    const tree = toJSON()
    const children = tree?.children || []
    const wrappers = children.filter(child => child?.props?.testID === 'flex-item-wrapper')

    expect(wrappers[0]).toHaveStyle({ width: 'auto' })
  })

  it('should use default props when none are provided', () => {
    const { toJSON } = render(
      global.app(
        <ContainerBox>
          <Text>Default Props</Text>
        </ContainerBox>
      )
    )
    expect(toJSON()).toMatchSnapshot()
  })
})

describe('Layout component tests', () => {
  it('should render virtualized columns when debug is true', () => {
    const { getAllByTestId } = render(
      global.app(
        <ContainerMain debug>
          <Text>Test</Text>
        </ContainerMain>
      )
    )
    const virtualColumns = getAllByTestId('virtual-column')
    expect(virtualColumns.length).toBeGreaterThan(0)
  })
})

describe('Utility functions tests', () => {
  it('should return empty string if no $align is provided', () => {
    const result = getAlignmentStyles(undefined, false)
    expect(result).toBe('')
  })

  it('should return justify-content when $noFlex is true', () => {
    expect(getAlignmentStyles('LEFT', true).join('')).toContain('justify-content: flex-start')
    expect(getAlignmentStyles('CENTER', true).join('')).toContain('justify-content: center')
    expect(getAlignmentStyles('RIGHT', true).join('')).toContain('justify-content: flex-end')
    expect(getAlignmentStyles('SPACE_BETWEEN', true).join('')).toContain('justify-content: space-between')
  })

  it('should return margin styles when $noFlex is false', () => {
    expect(getAlignmentStyles('LEFT', false).join('')).toContain('margin-right: auto')
    expect(getAlignmentStyles('CENTER', false).join('').replace(/\s/g, '')).toContain(
      'margin-left:auto;margin-right:auto'
    )
    expect(getAlignmentStyles('RIGHT', false).join('')).toContain('margin-left: auto')
    expect(getAlignmentStyles('SPACE_BETWEEN', false)).toBe('')
  })

  it('should return empty string when $noFlex is true and $align is invalid', () => {
    const result = getAlignmentStyles('INVALID', true)
    expect(result).toBe('')
  })

  it('should calculate space for two columns', () => {
    const containerWidth = 400
    const qtdColumns = 2
    const qtdGaps = 3
    const gap = 16

    const availableSpace = calculateAvailableSpace(containerWidth, qtdColumns, gap)

    const width = 400
    const columns = 2
    const totalColumns = 4
    const gapValue = 16
    const totalGaps = gapValue * qtdGaps

    const expected = ((width - totalGaps) / totalColumns) * columns + gapValue * (columns - 1)

    expect(availableSpace).toBeCloseTo(expected)
  })

  it('should return 0 when columns is 0', () => {
    const containerWidth = 400
    const qtdColumns = 0
    const qtdGaps = 3
    const gap = 16

    const availableSpace = calculateAvailableSpace(containerWidth, qtdColumns, gap)

    const width = 400
    const columns = 0
    const totalColumns = 4
    const gapValue = 16
    const totalGaps = gapValue * qtdGaps

    // rawCalculation = ((400 - 16 * 3) / 4) * 0 + 16 * (0 - 1)
    const rawCalculation = ((width - totalGaps) / totalColumns) * columns + gapValue * (columns - 1)

    // expect 0 because rawCalculation its < 0, so the function returns 0
    expect(rawCalculation).toBeLessThan(0)
    expect(availableSpace).toBe(0)
  })

  it('should work with gap = 0', () => {
    const containerWidth = 400
    const qtdColumns = 3
    const qtdGaps = 3
    const gap = 0

    const availableSpace = calculateAvailableSpace(containerWidth, qtdColumns, gap)

    const width = 400
    const columns = 3
    const totalColumns = 4
    const gapValue = 0
    const totalGaps = gapValue * qtdGaps

    const expected = ((width - totalGaps) / totalColumns) * columns + gapValue * (columns - 1)

    expect(availableSpace).toBe(expected)
  })
})
