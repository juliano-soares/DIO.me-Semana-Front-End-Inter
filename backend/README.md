- Requisitos e ambiente 

- Visual Studio Code
  Extensões:
- Insomnia ou Postman
---
Dependencias nescessárias
Express
typescript -D
ts-node -D 
@types/express -D
@types/node -D
nodemon -D

Criando setup Ininical - Referencias.
https://dev.to/melquisedecfelipe/configurando-eslint-no-node-com-express-e-typescript-58p9

# Começando o projeto pelo template:
Instalando o Postgress
Windowns:

Linux:
Pegando o projeto base e instalando as dependências:
# Com YARN:
- Clone o templete de: [dio-inter-clone-backend](https://github.com/pablohdev/dio-inter-clone-backend/tree/template)
- Abra o projeto no VS Code;
- Abra um terminal; (Ctrl+Shift+') ou no Menu na parte superior do VS Code

# Digite os seguintes Comandos:
yarn
yarn add nodemon -D
yarn add typeorm
yarn add crypto-js
yarn add @types/crypto-js -D
yarn add express-async-errors
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
yarn add cors
yarn add @types/cors
yarn add js-base64
# Configurando o Insomnia

# Configurar o tsconfing.json
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true,
    "emitDecoratorMetadata": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "typeRoots": [
      "./src/@types",
      "./@types",
      "./node_modules/@types",
    ]
  }
}
```
# Subir container

docker-compose up