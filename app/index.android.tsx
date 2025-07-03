import { navigationButtons } from "@/rotes";
import { Spacer } from "@mobilestock-native/spacer";
import { Typography } from "@mobilestock-native/typography";
import { router } from "expo-router";
import React, { Fragment } from "react";
import { Button, ScrollView, View } from "react-native";

export default function Screen() {
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: "#fff" }}>
      <Typography size="3XL" weight="BOLD" family="POPPINS-BOLD" align="CENTER">
        Repositório Mult-plat
      </Typography>
      <Spacer size="MD" />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {navigationButtons.length === 0 && (
          <Fragment>
            <Typography
              size="MD"
              weight="MEDIUM"
              family="POPPINS-MEDIUM"
              align="CENTER"
            >
              Vocẽ ainda não tem rotas definidas.
            </Typography>
            <Spacer size="MD" />
          </Fragment>
        )}
        {navigationButtons.map((route) => (
          <View
            style={{
              paddingHorizontal: 10,
            }}
            key={route as string}
          >
            <Button
              title={route as string}
              onPress={() => router.push(route)}
            />
            <Spacer size="MD" />
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          backgroundColor: "#e5e5e5",
          position: "fixed",
          bottom: 0,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography size="MD" weight="BOLD" family="POPPINS-BOLD">
          Execute o comando abaixo para adicionar uma rota.
        </Typography>
        <View
          style={{
            borderColor: "#404040",
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Typography family="MONOCRAFT">pnpm create-route</Typography>
        </View>
      </View>
    </View>
  );
}
