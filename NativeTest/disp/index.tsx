import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const ContainerWithAvailableWidth = ({ padding = 0 }) => {
  const [availableWidth, setAvailableWidth] = useState(0);

  const onLayout = useCallback(
    (event) => {
      const { width } = event.nativeEvent.layout;
      const innerWidth = width - padding * 2;
      setAvailableWidth(innerWidth);
    },
    [padding]
  );

  return (
    <View style={[styles.container, { padding }]} onLayout={onLayout}>
      <Text>Espaço disponível: {availableWidth}px</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 500,
    backgroundColor: "#eee",
  },
});

export default ContainerWithAvailableWidth;
