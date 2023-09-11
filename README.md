# Sistema de Gerênciamento de Empresas em Mapa com OpenLayers

---

### Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Docker e Docker Compose](https://www.docker.com/)
- [AXIOS](https://axios-http.com/)
- [Tailwind](https://tailwindcss.com/)
- [OpenLayers](https://openlayers.org/)
- [JWT](https://jwt.io/)

### Features Desenvolvidas

- Visualisação de Empresas e suas informações em Mapa
- Cadastrar Novas Empresas
- Login - Proteção de Rota com JWT

### Requisitos

- [Node e NPM - v^18](https://nodejs.org/en)

ou

- [Docker e Docker Compose](https://www.docker.com/)

### Técnicas e ferramentas

- Componetização
- Responsividade
- Docker
- SOLID
- Reaproveitamento de Código

---

## Configuração

1. Fazer a cópia do projeto para sua máquina

```bash
git clone https://github.com/mauricioccardoso/company-management_vue.git
```

1.1 Caso tenha o Docker e Docker compose configurado na sua máquina, siga para [Docker e Docker Compose](#configuração-com-docker-e-docker-compose).
Caso não tenha docker, continue para a coniguração abaixo.

2. Acesse a pasta raiz do projeto e entre na pasta do frontend

```bash
cd company-management_vue/frontend
```

3. Faça a instalação das dependências

```bash
yarn
```

ou

```bash
npm install
```
4. Se necessário, verifique e altere a url da api na variável "baseURL" no arquivo index.ts da pasta http

```bash
const httpClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/'
})
```

5. Utilize o comando abaixo para inicia o servidor do projeto frontend

```bash
yarn dev
```

ou

```bash
npm run dev
```

---

# Configuração com Docker e Docker compose

1. Após clonar o projeto. Acessar a pasta raiz do projeto a partir do terminal ou no terminal do editor de texto ou IDE.

2. usar o comando para subir os containers e aguardar a finalização.

```bash
docker compose up -d
```

3. Após os containers estiverem prontos, acessar no navegador:

Frontend - Aplicação
[http://localhost:5173/](http://localhost:5173/)

## Informações

- Para este projeto foi fornecido uma api separa do projeto principal. Subir o projeto ou containers do projeto da api, antes de levantar o container do projeto frontend.
- O projeto frotend ja contém todos os scripts e setup para subir o container, instalar dependências e subir o servidor do projeto frontend.
- O arquivo do docker compose, cria uma rede igual ao utilizado pela api. Em caso de alteração da rede da api é nescessário mudar a rede do projeto frontend.
- No formulário de criação de empresa, o enuciado informa que o 'representante' não é um campo obrigatório, porém a api tem o 'representante' como campo obrigatório.

---

## Contribuição

- ***[Maurício Erick da Costa Cardoso](https://portfolio-mauricio-cardoso.vercel.app/home)***

    - Desenvolvedor FullStack - ***PHP LARAVEL VUE.js TYPESCRIPT NODE.js DOCKER TAILWIND BOOTSTRAP MYSQL POSTGRESS LINUX GIT***

- **[GitHub](https://github.com/mauricioccardoso)**

- **[LinkedIn](https://www.linkedin.com/in/mauricioccardoso/)**

- **<mauricioerick17@gmail.com>**