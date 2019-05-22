//LOAD ENVIRONMENT VARS
require("dotenv").config();

const { resolve } = require("path");
const { createTransport } = require("nodemailer");
const Email = require("email-templates");

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;

const config = {
  transporter: {
    host: MAIL_HOST,
    port: Number(MAIL_PORT) || 465,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS
    }
  },
  template: {
    views: {
      root: resolve("src/views/"),
      options: {
        extension: "hbs"
      }
    }
  }
};

class Mailer {
  constructor() {
    this.transporter = createTransport(config.transporter);
    this.template = new Email(config.template);
  }

  async send(
    options,
    template = "mail-example",
    vars = { message: "message of test" }
  ) {
    const html = await this.template.render(template, vars);
    await this.transporter.sendMail({ ...options, html });
  }
}

module.exports = Mailer;
