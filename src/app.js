const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const Mailer = require("./mailer");

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    return this.express;
  }

  middlewares() {
    this.express.use(logger("dev"));
    this.express.use(express.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cors());
  }

  routes() {
    this.express.post("/send-mail", async (req, res) => {
      try {
        const { to, from, subject, message } = req.body;
        await new Mailer().send({ to, from, subject }, "mail-example", { message });
        return res.status(200).send("Email enviado com sucesso!");
      } catch (err) {
        console.log(err.message);
        return res
          .status(500)
          .send(`Falha no envio do email! Error: ${err.message}`);
      }
    });
  }
}

module.exports = App;
