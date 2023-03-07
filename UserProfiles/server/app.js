const express = require('express');
const app = express();
const PORT = "3000";
const HOST = 'localhost'

// Middlewares
const middlewares = (req, res, next) => {
    console.log(`Hello from middleware`);
    next()
}


app.get("/", (req, res) => {
    res.send("Home Page")
})

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