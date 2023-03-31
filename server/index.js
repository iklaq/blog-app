const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const user = require("./models/user");

const app = express();
const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


  try {
    mongoose.connect("mongodb://127.0.0.1:27017/blog-app")
    console.log("database connection done");
  }
  catch(e) {
    console.log("database does not connect");
  };

app.get("/", (req, res) => {
  res.send("homepage");
});

app.post("/register", async (req, res) => {
  const { userName, password } = req.body;

  const userDoc = new user({
    userName,
    password: bcrypt.hashSync(password, salt),
  });

  
    try {
      await userDoc.save()
      console.log("data stored successfully");
      res.json(userDoc);
    }
    catch(e) {
      console.log("data does not stored");
    };
});

app.listen(4000, () => {
  console.log("portt is running on port 4000");
});
