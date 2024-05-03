## Telephone Directory Client
### Agenda telefônica

### Tecnologias Utilizadas

- **Angular.JS**
- **Tailwind**
- **Spartan UI**

<p align="center">
  <img src="https://skillicons.dev/icons?i=angular,tailwind,spartanui" alt="techs">
</p>

### Estrutura:
- **MVVM**

## Pré-requisitos

- Certifique-se de ter o Node.js versão 20.12.2 instalado no seu sistema.

## Instalação

1. Clone este repositório e instale as dependências do projeto:

```bash
npm install
```

## Configurando o Proxy da API

No arquivo `environments/proxy.config.json`, adicione a configuração do proxy para redirecionar as chamadas da API. Por exemplo:

```json
{
   "/api": {
      "target": "http://localhost:3333/",
      "secure": false,
      "changeOrigin": true
   }
}

```

Certifique-se de substituir `http://localhost:3333` pelo URL da sua API.

## Executando o Servidor de Desenvolvimento

Após a instalação das dependências e a configuração do proxy da API, você pode iniciar o servidor de desenvolvimento executando o seguinte comando:

```bash
ng serve --open
```
