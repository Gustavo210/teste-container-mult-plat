import { router } from "expo-router";
import { Button, FlatList, View } from "react-native";

const routes = [
  { title: "Container", path: "/container/minha-rota" },
  { title: "Image", path: "/image" },
];

export default function Screen() {
  return (
    <FlatList
      data={routes}
      keyExtractor={(item) => item.path}
      renderItem={({ item }) => (
        <View style={{ marginVertical: 8 }}>
          <Button title={item.title} onPress={() => router.push(item.path)} />
        </View>
      )}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}
