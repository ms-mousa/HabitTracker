const server = require("express");
const router = server.Router();
const User = require("../models/User");

// @route   Get API User
// @desc    Get one user
// @access  Public
router.get("/user/:id", (req, res) => {
  User.findOne({
    userID: req.params.id
  })
    .then(user => res.json(user))
    .catch(err => res.send(err));
});

// @route   POST API User
// @desc    Create a new user
// @access  Public
router.post("/user", (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country
  })
    .then(user => res.json(user))
    .catch(err => res.send(err));
});

module.exports = router;
