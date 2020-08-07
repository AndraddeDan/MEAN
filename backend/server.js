/* Descrição: arquivo responsável por toda a configuração da aplicação (backend) */

const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port);
console.log("Application on port", port)
