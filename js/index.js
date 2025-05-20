
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
   let numbers = '';
   for (let i = 0; i <= 20; i++) {
       numbers += i + "-";
   }
   res.set('Content-Type', 'text/html'); 
   res.send(numbers);
});  

app.get("/rida", (req, res) => {
    res.send("rida");
});
app.get("/test", (req, res) => {
    res.send("test");
});
app.post("/post", (req, res) => {
    res.send("tespostt");
});

app.listen(3000, () => {
    
});
app.get("/findSummation/:n1/:n2",(req,res)=>{
     const sum=Number(req.params.n1)+Number(req.params.n2)
     
      res.send(sum);

})


  



