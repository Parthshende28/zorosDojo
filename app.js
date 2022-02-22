const express = require("express");
const path = require("path");
const app = express();
const fs = require('fs');
const port = 80;

// "const bodyparser = require('body-parser');

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:80/test');
// }

// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     addess: String
// });
// const contact = mongoose.model('Contact', contactSchema);" . ~~~this is mongodb code 

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for static file serving
app.use(express.urlencoded()); // it helps to provide data filled up in form to express

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // set the template engine as pug also dont forget to install pug using npm install pug
app.set('views', path.join(__dirname, 'views')) // set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get("/contact", (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});
app.post("/contact", (req, res) => {
    // "var myData = new contact(req.body);
    // myData.save().then(() => {
    //     res.send("Your details has been saved");
    // }).catch(() => {
    //     res.status(400).send("Details not saved please enter properly");
    // });
    // // res.status(200).render('contact.pug');" . ~~~this is also mongdb code to store data

    Name = req.body.Name
    Phone = req.body.Phone
    Email = req.body.Email
    Address = req.body.Address

    let outputToWrite =
`Name:- ${Name}
Phone No.:- ${Phone}
Email:- ${Email}
Address:- ${Address}`

    fs.writeFileSync('output.txt', outputToWrite);

    const params = {'message': 'Your form has been submitted successfully'};
    res.status(200).render('index.pug', params);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`This application started successfully on port ${port}`)
});
