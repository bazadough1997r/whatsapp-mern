// importing
const express = require("express");
const mongoose = require("mongoose");
const { Messages } = require("./dbMessages");
const Pusher = require("pusher");

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1147953",
  key: "d8c7bab62d7f4dc1455a",
  secret: "18aea1bcc24c1ab44a12",
  cluster: "eu",
  useTLS: true,
});

// middlewares
app.use(express.json());

// DB config
const connection_url =
  "mongodb+srv://admin:dhyhhAFJ9DfRhkl8@whatsapp-mern-backend.23lhu.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change, "changeee");
  });
});

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("hello world!"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`lsning on http://localhost:${port}`));
