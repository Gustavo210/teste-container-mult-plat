import { router } from "expo-router";
import React, { Fragment } from "react";
import { Button, Platform, ScrollView } from "react-native";

import { Spacer as SpacerNative } from "@mobilestock-native/spacer";
import { Spacer as SpacerWeb } from "@mobilestockweb/spacer";

type AppRoutes = Parameters<typeof router.push>[0];

const navigationButtons: AppRoutes[] = ["/container/minha-rota", "/list"];

const Spacer = Platform.OS === "web" ? SpacerWeb : SpacerNative;

export default function Screen() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      {navigationButtons.map((route) => (
        <Fragment key={route as string}>
          <Button title={route as string} onPress={() => router.push(route)} />
          <Spacer size="MD" />
        </Fragment>
      ))}
    </ScrollView>
  );
}
