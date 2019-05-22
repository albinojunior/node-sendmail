<h1 align="center">Node sendmail API</h1>
<p align="center"><a href="http://nodejs.org" target="blank">Node</a> API for send mails html(.hbs) templates.</p>
<p align="center">
</p>

- [1.  Installing](#1-installing)
  - [Install dependencies](#install-dependencies)
  - [Installing pm2](#installing-pm2)
  - [Environments](#environments)
- [2. Running](#2-running)
- [3. Examples](#3-examples)


## 1.  Installing

#### Install dependencies

```bash
$ npm i
```

#### Installing pm2
```bash
$ npm i -g pm2
```

#### Environments

Copy `.env.example` to `.env` and set environments


##  2. Running

```bash
$ npm start
```
- stop applications:
```bash
$ npm stop
```

## 3. Examples

- Request example as **curl**:
```bash
curl -X POST \
  http://localhost:3000/send-mail \
  -H 'Content-Type: application/json' \
  -d '{
	"to": "toemail@mail.com",
	"from": "frommail@mail.com <name>",
	"subject": "Email of test",
	"message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
}'
```
