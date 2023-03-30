const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const user = require('./models/user')
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const app = express();
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/blog-app")
  .then(() => {

   
    console.log("database connection done");
  })
  .catch(() => {
    console.log("database does not connect");
});

app.get('/',(req,res)=>{
    res.send('ho')
})



app.post('/register',async(req,res) => {
    
  
    const {userName,password} = req.body;

    const userDoc =  new user({
        userName,
        password:bcrypt.hashSync(password, salt),
    })

    await userDoc.save()
    .then(() => {
        console.log("data stored successfully");
        res.json(userDoc)
        
      })
      .catch(() => {
        console.log("data does not stored");
      });


    
})


  
app.listen(4000, ()=>{

    console.log("portt is running on port 4000")
})  

