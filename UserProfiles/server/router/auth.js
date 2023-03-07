const express = require('express');
const router = express.Router();
require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
    res.send("Home Page Router")
});

router.post("/register", (req, res) => {
    const { name, email, phone, work, password } = req.body;
    if (!name || !email || !phone || !work || !password) {
        return res.status(422).json({ error: "Please fill the form correctly" });
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email already exist" });
            }
            // const user = new User(req.body)
            const user = new User({ name, email, phone, work, password });
            user.save().then(() => {
                res.status(201).json({ message: "User registered successfully" });
            }).catch((err) => res.status(500).json({ error: "Failed to register" }))
        }).catch(err => console.log(err))
});



module.exports = router;