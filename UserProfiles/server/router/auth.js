const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
    res.send("Home Page Router")
});

// // Using Promises
// router.post("/register", (req, res) => {
//     const { name, email, phone, work, password } = req.body;
//     if (!name || !email || !phone || !work || !password) {
//         return res.status(422).json({ error: "Please fill the form correctly" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already exist" });
//             }
//             // const user = new User(req.body)
//             const user = new User({ name, email, phone, work, password });
//             user.save().then(() => {
//                 res.status(201).json({ message: "User registered successfully" });
//             }).catch((err) => res.status(500).json({ error: "Failed to register" }))
//         }).catch(err => console.log(err))
// });

// Using Async/Await
router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the form correctly" });
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password !== cpassword) {
            return res.status(422).json({ error: "Passwords not matching" });
        }
        else {
            const user = new User({ name, email, phone, work, password });
            await user.save()
            res.status(201).json({ message: "User registered successfully" });
        }
    } catch (err) {
        console.log(err)
    }
});


// Login Route
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "Please fill the form correctly" });
        }
        const userExist = await User.findOne({ email: email })
        // console.log(userExist)
        if (userExist) {
            const isMatch = await bcrypt.compare(password, userExist.password);
            const token = await userExist.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (isMatch) {
                res.status(200).json({ error: "User Login Successfully" });
            }
            else {
                res.status(404).json({ error: "Invalid Credentials" });
            }
        }
        else {
            res.status(422).json({ error: "Email does not exist" });
        }


    } catch (error) {
        console.log(error);
    }
})


module.exports = router;