const express = require("express");
const router = express.Router();

// Card model
const Card = require("../../models/Card");

// @route  Get api/cards
// @desc   Get all cards
// @access Public
router.get("/", (req, res) => {
    Card.find()
        .sort({ date: -1 })
        .then(cards => res.json(cards));
})
// @route  Post api/cards
// @desc   Post new card
// @access Public
router.post("/", (req, res) => {
    const newCard = new Card({
        title: req.body.title,
        desc: req.body.desc
    });

    newCard.save().then(card => res.json(card))
})
// @route  DELETE api/cards
// @desc   Delete card
// @access Public
router.delete("/:id", (req, res) => {
    Card.findById(req.params.id)
        .then(card => { card.remove().then(res.json({success: true})) })
        .catch(err => res.status(404).json({success: false}))
})

module.exports = router;