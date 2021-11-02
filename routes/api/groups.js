const express = require("express");
const router = express.Router();

// Group model
const Group = require("../../models/group");

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
        cardIds: [],
        userIdss: []
    });

    newGroup.save().then(group => {
        res.json(group)

        const newGroupListItem = new GroupListItem({
            name: req.body.name,
            groupId: group._id
        });
        process.stdout.write(JSON.stringify(newGroupListItem))
        newGroupListItem.save()
    })
})
// @route  DELETE api/groups
// @desc   Delete group
// @access Public
router.delete("/", (req, res) => {
    // req = { params: {id} }
    Group.findById(req.body.id)
        .then(group => { group.remove().then(res.json({success: true})) })
        .catch(err => res.status(404).json({success: false}))
})

module.exports = router;