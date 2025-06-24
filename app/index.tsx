import { router } from "expo-router";
import { Button, ScrollView } from "react-native";

export default function Screen() {
  return (
    <ScrollView>
      <Button
        title="Container"
        onPress={() => router.push("/container/minha-rota")}
      />
    </ScrollView>
  );
}
