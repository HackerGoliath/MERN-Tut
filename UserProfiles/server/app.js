const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
const HOST = process.env.HOST;
require("./db/conn");

// const User = require("./models/userSchema");

app.use(express.json());
app.use(require('./router/auth'))

// Middlewares
const middlewares = (req, res, next) => {
    console.log(`Hello from middleware`);
    next()
}


// app.get("/", (req, res) => {
//     res.send("Home Page")
// })

app.get("/about", middlewares, (req, res) => {
    console.log("Hello from About");
    res.send("About Page")
})

app.get("/contact", (req, res) => {
    res.send("Contact Page")
})

app.get("/singup", (req, res) => {
    res.send("Signup Page")
})

app.get("/signin", (req, res) => {
    res.send("Login Page")
})

app.listen(PORT, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
})