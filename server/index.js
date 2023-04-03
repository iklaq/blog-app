const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const user = require("./models/user");

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = "asdsf32rfsdr2wfsf32rfgbhyh4";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

try {
  mongoose.connect("mongodb://127.0.0.1:27017/blog-app");
  console.log("database connection done");
} catch (e) {
  console.log("database does not connect");
}

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
    await userDoc.save();
    console.log("data stored successfully");
    res.json(userDoc);
  } catch (e) {
    console.log("data does not stored");
  }
});

app.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  console.log(req.body);

  const userDoc = await user.findOne({ userName });
  const isCorrectPassword = bcrypt.compareSync(password, userDoc.password);

  if (isCorrectPassword) {
    jwt.sign({ userName, id: userDoc._id }, secret, {}, (error, token) => {
      if (error) throw error;
      res.cookie("token", token).json({
        id: userDoc._id,
        userName,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(4000, () => {
  console.log("portt is running on port 4000");
});
