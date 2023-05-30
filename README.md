![image](./documents/images/store/home-store.png)

# Rocketseat Experience 2023 - Mobile App

Repositório do e-commerce construído por vynnydev :brazil:

# Home Page - Front
![image](./documents/images/store/home-store.png)

# All Products Page - Front
![image](./documents/images/store/all-products.png)

# Cart Page - Front
![image](./documents/images/store/cart.png)

# Admin Products Page - Admin
![image](./documents/images/admin/admin-products.png)

# Admin Categories Page - Admin
![image](./documents/images/admin/admin-categories.png)

# Admin Orders Page - Admin
![image](./documents/images/admin/admin-orders.png)

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/vynnydev/k8s-ecommerce-genesysbank
ADMIN ==> cd packages/apps/k8s-ecommerce-admin
STORE ==> cd packages/apps/k8s-ecommerce-front
npm install
```

### Back-end

O back-end desse projeto é construído em NextJS, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

### Execução

> Configure as variáveis de ambiente:

```sh
# ADMIN
MONGODB_URI="mongodb+srv://tfk8scloud:k8s_ecommerce@k8s-cluster.xhs1em3.mongodb.net/"

GOOGLE_ID="753135604201-0r5175h68ndtesp110a3a1dbib0ae44g.apps.googleusercontent.com"
GOOGLE_SECRET="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"
S3_ACCESS_KEY="AKIAVWXYLNMZFWLABOM6"
S3_SECRET_ACCESS_KEY="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"

# FRONT
MONGODB_URI="mongodb+srv://tfk8scloud:k8s_ecommerce@k8s-cluster.xhs1em3.mongodb.net/"
STRIPE_PK="pk_test_51NDHCgKNzzOESnvH1JPTwqLd0fCLLzJbF7Tj5wK5I9ls72h9X4CNSJMRPh4K6DVuT1CURjZKUTIuzHG8tADt07cm00MpV1FI70"
STRIPE_SK="sk_test_51NDHCgKNzzOESnvH23zPocHbLjtcJcOQICWs6Qmkvp7Oim2mdYjISkIm3XOWeexwLtLLnkddUhhJcFIGVbSjmWZ30089efJ1Uq"
```

> Após configurar o ambiente mobile, você pode executar o projeto: npm next dev

## Tech Stack

**📱 Front:**

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NextJS](https://nextjs.org/)
- [Next-Auth](https://next-auth.js.org/)
- [Styled-Components](https://styled-components.com/)
- [TailWindCSS](https://tailwindcss.com/)
- [Mongoose](https://tailwindcss.com/)
- [MongoDB](https://tailwindcss.com/)
- [Stripe](https://stripe.com/br)

## Funcionalidades 🚀

Até o momento, este projeto tem funcionalidades basicas.

### Funcionalidades 1.0 (MVP):

- [ ] **Adicionar, visualizar, editar produtos**
- [ ] **Visualizar pedidos**
- [ ] **Carrinho de produtos com persistência**

### Funcionalidades 2.0:

- [ ] **Autenticação e tradução para outros idiomas**
- [ ] **Sistema de checkout completo**
- [ ] **Clean Architecture**
- [ ] **TypeScript**
- [ ] **Prisma**
- [ ] **Deploy (Kubernetes)**


## Licença 📃

[MIT](https://github.com/diego3g/rsxp-2023/blob/main/LICENSE)


