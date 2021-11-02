const express = require("express");
const router = express.Router();

// Group model
const Group = require("../../models/group");

// @route  Get api/group
// @desc   Get all group
// @access Public
router.post("/", (req, res) => {
    Group.findById(req.body.id)
        .then(group => res.json(group));
})

module.exports = router;