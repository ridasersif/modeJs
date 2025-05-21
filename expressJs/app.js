
/*D7b5I08t7eB16592*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3002;
app.use(express.urlencoded({extended:true}))
const User=require("./models/myDataSchema")

app.get('/', (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

mongoose.connect('mongodb+srv://ridasersif1:D7b5I08t7eB16592@cluster0.potalny.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Connection error:', err);
  });

app.post('/', (req, res) => {
  console.log(req.body)
  const user=new User(req.body)
  user.save().then(()=>{
     res.redirect("/")
    
  }).catch((err)=>{
    console.log(err)
  })
  
 
});
