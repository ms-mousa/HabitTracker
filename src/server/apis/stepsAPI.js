const server = require("express");
const router = server.Router();
const Steps = require("../models/Steps");
const User = require("../models/User");

// @route   Get API Steps
// @desc    Get Steps data per user
// @access  Public
router.get("/steps/:id", (req, res) => {
  Steps.find({
    userID: req.params.id
  })
    .then(entry => res.json(entry))
    .catch(err => res.send(err));
});

// @route   POST Steps API
// @desc    Create new entry for steps with user ID
// @access  Public
router.post("/steps", async (req, res) => {
  const user = await User.findOne({ userID: req.body.userID });
  user === null
    ? res.send("User not found")
    : Steps.create({
        userID: req.body.userID,
        steps: req.body.steps
      })
        .then(entry => res.json(entry))
        .catch(err => res.send(err));
});

module.exports = router;
