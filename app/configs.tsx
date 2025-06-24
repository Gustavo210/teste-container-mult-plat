import defaultSizes from "@/defaultSizes";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Configs() {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={{
          flex: 2,
          backgroundColor: "transparent",
        }}
      >
        <></>
      </TouchableOpacity>
      <FlatList
        data={Object.entries(defaultSizes.layout)}
        keyExtractor={([key]) => key}
        style={{ flex: 1, backgroundColor: "#fff" }}
        renderItem={({ item: [key, value] }) => (
          <View>
            <Text style={{ padding: 10, fontWeight: "bold", fontSize: 20 }}>
              {key}
            </Text>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
            >
              {Object.entries(value).map(([subKey, subValue]) => (
                <View
                  key={subKey}
                  style={{
                    padding: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                    }}
                  >
                    {subKey}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#333",
                      textAlign: "center",
                    }}
                  >
                    {subValue}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      />
    </View>
  );
}
