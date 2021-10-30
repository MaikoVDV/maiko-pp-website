const express = require("express");
const router = express.Router();

// Group model
const Group = require("../../models/Group");
const Card = require("../../models/Card");

// @route  Get api/cards
// @desc   Get all groups
// @access Public
router.get("/", (req, res) => {
    // req = { groupId }
    Group.findById(req.query.groupId)
        .then(group => {
            const cardIds = group.cardIds;
            Card.find({_id: { $in: cardIds }}).then(cards => {
                res.json(cards)
            })
        });
})

// @route  Post api/cards
// @desc   Post new card
// @access Public
router.post("/", (req, res) => {
    // req = { title, desc, groupId }
    const newCard = new Card({
        title: req.body.title,
        desc: req.body.desc
    });

    // Saving the new card in the cards collection
    newCard.save().then(card => {
        res.json(card)

        // Adding the card's id to the group's card array
        Group.findById(req.body.groupId).then(group => {
            group.cardIds.push(card._id)
            group.save()
        })
    })
})

// @route  DELETE api/cards
// @desc   Delete card
// @access Public
router.delete("/", (req, res) => {
    // req = { groupId, cardId }
    Group.findById(req.body.groupId)
        .then(group => {
            group.cardIds.pull(req.body.cardId)
            group.save()
        })
    Card.findByIdAndDelete(req.body.cardId, (err, card) => {
        // err = An error message, if any
        // card = The card that has been deleted from the cards collection
    })
})

module.exports = router;