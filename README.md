# mult-plat

Este projeto é um aplicativo React Native multi-plataforma utilizando Expo Router, com suporte para Android e Web.

## Estrutura do Projeto

```
app/                # Rotas e telas principais
  (tabs)/           # Rotas em abas
  teste/            # Exemplo de rota customizada
  ...
components/         # Componentes reutilizáveis
constants/          # Constantes globais
hooks/              # Hooks customizados
assets/             # Imagens e fontes
scripts/            # Scripts utilitários
```

## Scripts disponíveis

- `pnpm start` — Inicia o projeto Expo

## Como rodar o projeto

1. Instale as dependências do projeto:
   ```sh
   pnpm install
   ```
2. Inicie o projeto:
   ```sh
   pnpm start
   ```
3. Para visualizar a aplicação:
   - **Android:** Utilize o aplicativo Expo Go (na última versão) no seu dispositivo Android para escanear o QR Code exibido no terminal. Isso iniciará o app no seu dispositivo.
   - **Web:** Acesse a URL disponibilizada no terminal que termina com a porta `8081` para visualizar a aplicação rodando no navegador.

## Observações

- O projeto utiliza pacotes internos `@mobilestock-native/container`, `@mobilestock-native/tools` e `@mobilestockweb/container`. Certifique-se de que esses pacotes estejam publicados no NPM ou disponíveis em um repositório privado (como Verdaccio) para que a instalação funcione corretamente.
- Certifique-se de ter o [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente.
