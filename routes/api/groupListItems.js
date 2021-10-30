const express = require("express");
const router = express.Router();

// GroupListItem model
const GroupListItem = require("../../models/GroupListItem");

// @route  Get api/groupListItems
// @desc   Get all groupListItems
// @access Public
router.get("/", (req, res) => {
    GroupListItem.find()
        .sort({ date: -1 })
        .then(groupListItems => res.json(groupListItems));
})
// @route  Post api/groupListItems
// @desc   Post new groupListItem
// @access Public
// router.post("/", (req, res) => {
//     const newGroupListItem = new GroupListItem({
//         name: req.body.name,
//         desc: req.body.desc,
//         cards: req.body.cards,
//         users: req.body.users
//     });

//     newGroupListItem.save().then(groupListItem => res.json(groupListItem))
// })
// // @route  DELETE api/groupListItems
// // @desc   Delete groupListItem
// // @access Public
// router.delete("/:id", (req, res) => {
//     GroupListItem.findById(req.params.id)
//         .then(groupListItem => { groupListItem.remove().then(res.json({success: true})) })
//         .catch(err => res.status(404).json({success: false}))
// })

module.exports = router;