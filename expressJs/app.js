
/*D7b5I08t7eB16592*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3002;
app.use(express.urlencoded({extended:true}))
const User=require("./models/myDataSchema")
app.set("view engine","ejs")
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
  res.render("home",{mytitle:"homePge"});
});
app.get('/users', (req, res) => {
  User.find()
    .then((result) => {
      res.render("users", {
        mytitle: "Liste des utilisateurs",
        users: result
      });
    })
    .catch((err) => {
      console.log(err);
    });
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
  console.log(req.body);
  const user = new User(req.body);
  user.save()
    .then(() => {
      res.redirect("/users"); // ✅ غادي يرجعنا للائحة
    })
    .catch((err) => {
      console.log(err);
    });
});

// حذف المستخدم
app.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/users'))
    .catch(err => console.log(err));
});

// عرض صفحة التعديل
app.get('/users/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.render('editUser', {
        mytitle: 'Modifier utilisateur',
        user
      });
    })
    .catch(err => console.log(err));
});

// تنفيذ التعديل
app.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/users'))
    .catch(err => console.log(err));
});
