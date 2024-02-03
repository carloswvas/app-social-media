const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá, Mundo");
});

const posts = [
  { id: 1, title: "Fist Post", comment: "This is first port content" },
  { id: 2, title: "second Post", comment: "This is second port content" },
];

app.get("/post", (req, res) => {
  const data = posts.map((post) => {
    return post;
  });
  res.status(200).json(data);
});

app.post("/post", (req, res) => {
  const { id, title, comment } = req.body;

  const post = {
    id,
    title,
    comment,
  };

  posts.push(post);

  res.status(204);
});

app.listen(5000, () => {
  console.log("App is Running");
});
