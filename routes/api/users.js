const express = require("express");
const router = express.Router();
const axios = require('axios')
const jwt = require('jsonwebtoken')

// User model
const User = require("../../models/user");
const Group = require("../../models/group");

// @route  Post api/users
// @desc   Register new user
// @access Public
router.post("/login", async (req, res) => {
    const decoded = jwt.decode(req.body.jwt)
    if(decoded === null) return res.status(400).json({msg: "JWT is invalid. Registering failed."})
    //res.json(decoded)
    const userId = decoded.sub
    // Checking if the user already exists
    User.findOne({gId: userId}).then(user => {
        if(user !== null) {
            return res.json(user)
        }
        const newUser = new User({
            gId: userId,
            groups: [],
            userName: decoded.name,
            pfp: decoded.picture
        })
        newUser.save().then(user => {
            return res.json(user)
        })
    })
})
router.post("/joinGroup", async (req, res) => {
    const decoded = jwt.decode(req.body.jwt)
    if(decoded === null) return res.status(400).json({msg: "JWT is invalid. Joining failed."})
    //res.json(decoded)
    const userId = decoded.sub
    // Checking if the user already exists
    User.findOne({gId: userId}).then(user => {
        if(user === null) {
            return res.status(400).json({msg: "User was not found. Joining group failed."})
        }
        Group.findOne({_id: req.body.groupId}).then(group => {
            const newGroup = {
                groupId: group._id,
                groupName: group.name
            }
            // Checking if the user is already in the group
            //process.stdout.write(req.body.groupId)
            // let duplicate = user.groups.find(listItem => listItem.groupId === newGroup.groupId);
            // if(duplicate !== undefined) {
            //     process.stdout.write("User already in this group.\n")
            //     process.stdout.write(`Old: ${duplicate.groupId}, New: ${newGroup.groupId}`)
            //     //process.stdout.write(JSON.stringify(duplicate))
            //     res.statusMessage = "User is already in this group."
            //     return res.status(400).end();
            // }
            let isDuplicate = user.groups.some(function(listItem) {
                return listItem.groupId == newGroup.groupId;
            })
            if(isDuplicate) {
                res.statusMessage = "The user is already in this group.";
                return res.status(400).end();
            }
            process.stdout.write(JSON.stringify(isDuplicate))
            user.groups.push(newGroup);
            user.save();
            res.json(user.groups);
        })
    })
})
router.get("/", (req, res) => {
    // req = { jwtId }
    User.findOne({ jwtId: req.body.jwtId}, user => {
         res.json(user)
    })
})

module.exports = router;