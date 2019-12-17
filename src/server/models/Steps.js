const db = require("mongoose");
const schema = db.Schema;

const stepsSchema = new schema({
  userID: {
    type: Number
  },
  steps: {
    type: Number
  },
  date: {
    type: Date,
    default: new Date()
  }
});

module.exports = db.model("Steps", stepsSchema);
