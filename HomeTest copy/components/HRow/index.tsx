import React from 'react';
import { StyleSheet, View } from 'react-native';

type Align = 'flex-start' | 'center' | 'flex-end' | 'space-between';

interface Props {
  size?: number;
  align?: Align;
  gap?: number;
  children: React.ReactNode;
}

export default function HRow({
  align = 'flex-start',
  gap = 8,
  children,
}: Props) {
  return (
    <View style={[styles.row, { justifyContent: align, gap }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});
