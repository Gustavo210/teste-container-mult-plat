import { router } from "expo-router";
import React, { Fragment } from "react";
import { Button, ScrollView } from "react-native";

type AppRoutes = Parameters<typeof router.push>[0];

const navigationButtons: AppRoutes[] = [
  "/container/minha-rota",
  "/novo-layout",
];

export default function Screen() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      {navigationButtons.map((route) => (
        <Fragment key={route as string}>
          <Button title={route as string} onPress={() => router.push(route)} />
        </Fragment>
      ))}
    </ScrollView>
  );
}
