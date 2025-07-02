# mult-plat

Este projeto é um aplicativo React Native multi-plataforma utilizando Expo Router, com suporte para Android e Web.

## Scripts disponíveis

- `pnpm start` — Inicia o projeto Expo
- `pnpm create-route` — Cria uma nova rota de componente

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

## Criando uma Nova Rota de Componente

Para criar uma nova rota de componente, execute o seguinte comando:

```sh
pnpm create-route
```

O script irá perguntar o nome do componente que você deseja testar. Por exemplo, se você digitar `MyAwesomeComponent`, ele criará uma nova pasta `app/my-awesome-component` com os seguintes arquivos:

- `layout.tsx`: Layout da rota.
- `index.tsx`: Fallback da rota.
- `index.android.tsx`: Rota específica para Android.
- `index.web.tsx`: Rota específica para Web.

Todos os arquivos utilizarão `styled-components` da respectiva plataforma para estilização.
