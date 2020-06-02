## Planos VxTell

- Criei o teste baseado em MEAN stack (Mongo, Express, Angular e Nodejs).
- Separei as pastas por contexto onde: `api` é referente ao backend da aplicação, `database` contém os dados a serem inseridos no mongodb conforme a tabela informada no pdf do teste e `frontend` contém o front da aplicação com a lógica de cálculos a ser exibida ao usuário.

## Como executar

- Primeiramente deve-se ter o MongoDB instalado com path configurado para rodar o seguinte comando dentro da pasta `database` `mongo localhost/meanvxtell ddds.js planos.js precos.js`.
- Após ter os dados se faz necessário realizar o `npm i` dentro das pastas `frontend` e `api`.
- Para rodar o servidor da api é só executar o `npm start` dentro da pasta `api` (Será utilizada a porta 3000).
- [*IMPORTANTE*] Para rodar o servidor do angular é necessário executar o `npm start` ou `ng serve --proxy-config proxy.config.js` dentro da pasta `frontend` pois devido ao cors tive de implemmentar configurações para ter a api e o projeto rodando localmente, caso contrário não seria possível pegar os dados.