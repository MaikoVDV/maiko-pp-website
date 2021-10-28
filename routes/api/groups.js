const express = require("express");
const router = express.Router();

// Group model
const Group = require("../../models/Group");

// @route  Get api/groups
// @desc   Get all groups
// @access Public
router.get("/", (req, res) => {
    Group.find()
        .sort({ date: -1 })
        .then(groups => res.json(groups));
})
// @route  Post api/groups
// @desc   Post new group
// @access Public
router.post("/", (req, res) => {
    const newGroup = new Group({
        name: req.body.name,
        desc: req.body.desc,
        cards: req.body.cards,
        users: req.body.users
    });

    newGroup.save().then(group => res.json(group))
})
// @route  DELETE api/groups
// @desc   Delete group
// @access Public
router.delete("/:id", (req, res) => {
    Group.findById(req.params.id)
        .then(group => { group.remove().then(res.json({success: true})) })
        .catch(err => res.status(404).json({success: false}))
})

module.exports = router;