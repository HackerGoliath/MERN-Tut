const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;
const HOST = process.env.HOST;
require("./db/conn");

// const User = require("./models/userSchema");
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json());
app.use(require('./router/auth'))

// Middlewares
// const middlewares = (req, res, next) => {
//     console.log(`Hello from middleware`);
//     next()
// }




// app.get("/about", (req, res) => {
// res.cookie("jwtoken", "Deepak");
// console.log("Hello from About");
//     res.send("About Page")
// })

// app.get("/contact", (req, res) => {
//     res.send("Contact Page")
// })

app.get("/singup", (req, res) => {
    res.send("Signup Page")
})

// app.get("/signin", (req, res) => {
//     res.send("Login Page")
// })


app.listen(PORT, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
})