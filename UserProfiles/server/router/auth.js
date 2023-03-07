const express = require('express');
const router = express.Router();
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
        const user = new User({ name, email, phone, work, password });
        await user.save()
        res.status(201).json({ message: "User registered successfully" });
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
            return res.status(200).json({ error: "User Login Successfully" });
        }
        else {
            return res.status(404).json({ error: "User Not Found" });
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;