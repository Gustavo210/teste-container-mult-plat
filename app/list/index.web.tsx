import { Img } from "@/Image/src";
import Container from "@mobilestockweb/container";
import { List } from "@mobilestockweb/list";
import { Spacer } from "@mobilestockweb/spacer";
import { Typography } from "@mobilestockweb/typography";
import { ScrollView } from "react-native";
import { styled } from "styled-components";

export default function MinhaRota() {
  return (
    <ScrollView>
      <List
        data={[
          { id: 1, title: "Item 1", description: "Description for Item 1" },
          { id: 2, title: "Item 2", description: "Description for Item 2" },
          { id: 3, title: "Item 3", description: "Description for Item 3" },
          { id: 4, title: "Item 4", description: "Description for Item 4" },
          { id: 5, title: "Item 5", description: "Description for Item 5" },
          { id: 6, title: "Item 6", description: "Description for Item 6" },
          { id: 7, title: "Item 7", description: "Description for Item 7" },
          { id: 8, title: "Item 8", description: "Description for Item 8" },
          { id: 9, title: "Item 9", description: "Description for Item 9" },
          {
            id: 10,
            title: "Item 10",
            description: "Description for Item 10",
          },
          {
            id: 11,
            title: "Item 11",
            description: "Description for Item 11",
          },
          {
            id: 12,
            title: "Item 12",
            description: "Description for Item 12",
          },
          {
            id: 13,
            title: "Item 13",
            description: "Description for Item 13",
          },
          {
            id: 14,
            title: "Item 14",
            description: "Description for Item 14",
          },
          {
            id: 15,
            title: "Item 15",
            description: "Description for Item 15",
          },
        ]}
        itemKey="id"
        // renderItem={() => <CardContainer />}
        renderItem={(item) => (
          <CardItem>
            <Container>
              <Img
                size="SM"
                alt="TESTE"
                borderRadius="NONE"
                src="https://images.unsplash.com/photo-1748392029321-58793571f850?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Container direction="COLUMN">
                <Spacer size="XS" />
                <Typography size="LG" weight="BOLD" family="POPPINS">
                  {item.title}
                </Typography>
                <Typography family="MONOCRAFT" size="XS">
                  {item.description}
                </Typography>
              </Container>
            </Container>
          </CardItem>
        )}
        separatorComponent={<Spacer size="XS" />}
      />
      <Spacer size="SM" />
    </ScrollView>
  );
}
const CardItem = styled.div`
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 8px;
`;
