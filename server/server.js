import express from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";

import Deck from "./models/Deck.js";

const app = express();

app.use(express.json());
// const port = process.env.PORT || 5510;
const port = 5510;

app.post("/decks", async (req, res) => {
  const newDeck = new Deck({title: req.body.title});

  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

app.get("/api/:id", (req, res) => {
  res.json({name: "eri", id: req.params.id});
});

const db = mongoose
  .connect(
    "mongodb+srv://ergjusalipaj:Opwc4UJW3mNfZIQm@cluster0.ktrurl8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  });
