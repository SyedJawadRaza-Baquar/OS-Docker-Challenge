const express = require("express");

const app = express();

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  {
    id: 3,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
  },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res
      .status(404)
      .json({ message: "The book with the given ID was not found." });
  }
  res.json(book);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
