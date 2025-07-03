import { navigationButtons } from "@/rotes";
import { Spacer } from "@mobilestockweb/spacer";
import { Typography } from "@mobilestockweb/typography";
import { router } from "expo-router";
import React, { Fragment } from "react";

export default function Screen() {
  return (
    <div style={{ flex: 1, paddingTop: 40, backgroundColor: "#fff" }}>
      <Typography size="3XL" weight="BOLD" family="POPPINS" align="CENTER">
        Repositório Mult-plat
      </Typography>
      <Spacer size="MD" />
      {navigationButtons.length === 0 && (
        <Fragment>
          <Typography size="MD" weight="MEDIUM" family="POPPINS" align="CENTER">
            Vocẽ ainda não tem rotas definidas.
          </Typography>
          <Spacer size="MD" />
        </Fragment>
      )}
      {navigationButtons.map((route) => (
        <div
          style={{
            padding: "10px 0",
          }}
          key={route as string}
        >
          <button onClick={() => router.push(route)}>{route as string}</button>
          <Spacer size="MD" />
        </div>
      ))}
      <div
        style={{
          backgroundColor: "#e5e5e5",
          position: "fixed",
          bottom: 0,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography size="MD" weight="BOLD" family="POPPINS">
          Execute o comando abaixo para adicionar uma rota.
        </Typography>
        <div
          style={{
            borderColor: "#404040",
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Typography family="MONOCRAFT">pnpm create-route</Typography>
        </div>
      </div>
    </div>
  );
}
