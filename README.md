# 🚀 KeepAlive Service

Um serviço simples para manter aplicações hospedadas ativas, evitando que entrem em modo de inatividade (sleep) em plataformas como Railway, Render e similares.

---

## 📌 Sobre o projeto

Este projeto foi criado para resolver um problema comum em ambientes de hospedagem gratuitos:

> 🔴 Aplicações que “dormem” após um período de inatividade.

O **KeepAlive** realiza requisições periódicas para uma URL definida, garantindo que o serviço permaneça ativo.

---

## ⚙️ Como funciona

* Envia requisições HTTP em intervalos definidos
* Mantém endpoints ativos
* Pode ser usado com qualquer aplicação web (API, frontend, etc.)

---

## 🧰 Tecnologias utilizadas

* Node.js
* JavaScript
* HTTP Requests (fetch/axios)

---

## 🚀 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/GabrielCardoso-0/keepalive.git
cd keepalive
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Configure as variáveis

Crie um arquivo `.env` na raiz:

```env
URL=https://seu-servico.com
INTERVAL=300000
```

📌 Onde:

* `URL` → endpoint que será chamado
* `INTERVAL` → tempo em milissegundos (ex: 300000 = 5 minutos)

---

### 4. Execute o projeto

```bash
npm start
```

---

## ☁️ Deploy no Railway

1. Crie um novo projeto no Railway
2. Conecte este repositório
3. Configure as variáveis de ambiente:

   * `URL`
   * `INTERVAL`
4. Deploy automático 🚀

---

## 📊 Exemplo de uso

Manter ativo:

* APIs REST
* Sistemas SaaS
* Landing pages
* Projetos pessoais

---

## ⚠️ Observações

* Algumas plataformas podem limitar requisições
* Use com responsabilidade para evitar bloqueios
* Não substitui soluções de produção (como uptime monitoring profissional)

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias:

1. Fork do projeto
2. Crie uma branch (`feature/nova-feature`)
3. Commit suas mudanças
4. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

Desenvolvido por **Gabriel Cardoso Fernandes**

* GitHub: https://github.com/GabrielCardoso-0

---

## ⭐ Apoie

Se esse projeto te ajudou, deixe uma estrela no repositório!
