const db = require("mongoose");
const schema = db.Schema;

const userSchema = new schema({
  userID: {
    type: Number,
    default: Math.floor(Math.random() * 100)
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  country: {
    type: String
  }
});

module.exports = db.model("User", userSchema);
