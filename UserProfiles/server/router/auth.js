const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../models/userSchema");
const authenticate = require("../middlewares/authenticate");
const cookieParser = require('cookie-parser');

router.use(cookieParser());

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
        if (userExist) {
            const isMatch = await bcrypt.compare(password, userExist.password);
            const token = await userExist.generateAuthToken();
            // localStorage.setItem("token", token);
            res.cookie("jwtToken", token, {
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

// About us page
router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
});

// Get user data for contact us and home page
router.get("/getdata", authenticate, (req, res) => {
    res.send(req.rootUser);
})

// Contact Us Page
router.post("/contact", authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body

        if (!name || !email || !phone || !message) {
            console.log("Error in contact form");
            return res.json({ error: "Plzz fill the form correctly" })
        }
        const userContact = await User.findOne({ _id: req.userID })

        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({ message: "User contact successfully" });
        }
    } catch (err) {
        console.log(err);
    }
});

// Logout Page
router.get("/logout", (req, res) => {
    console.log("Logout Page");
    res.clearCookie("jwtToken", { path: "/" });
    res.status(200).send("User Logout")
})


module.exports = router;