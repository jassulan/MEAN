const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  imagePath: { type: String, required: true },
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model("Profile", profileSchema);
