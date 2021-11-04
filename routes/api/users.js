const express = require("express");
const router = express.Router();

// User model
const User = require("../../models/user");

// @route  Post api/users
// @desc   Register new user
// @access Public
router.post("/", (req, res) => {
    // req = { groupId }
    const { name, email, pfp, jwt } = req.body;

    // Checking if all fields have been entered
    if(!name || !email || !pfp || !jwt) {
        return res.status(400).json({msg: "Request incomplete. Please enter all required fields."});
    }
    // Checking if the user already exists
    User.findOne({email: email}).then(user => {
        if(user !== null) return res.status(400).json({msg: "User with that email address already exists."})
    })

    const newUser = new User({
        name,
        email,
        pfp,
        jwt
    })
})

module.exports = router;