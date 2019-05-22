//LOAD ENVIRONMENT VARS
require("dotenv").config();

const http = require("http");
const App = require("./app");

const { APP_PORT } = process.env;

const server = http.createServer(new App());

server.listen(APP_PORT);

server.on("listening", () => {
  console.log(`API has been started in port ${APP_PORT}!`);
});

server.on("error", error => {
  console.log(error.message);
});
