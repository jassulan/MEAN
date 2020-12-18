const mongoose = require("mongoose");

const scriptSchema = mongoose.Schema({
  step1: { type: String, required: true },
  step2: { type: String, required: true },
  step3: { type: String, required: true },
  step4: { type: String, required: true },
  step5: { type: String, required: true },
  imagePath: { type: String, required: true }
});

module.exports = mongoose.model("Script", scriptSchema);
