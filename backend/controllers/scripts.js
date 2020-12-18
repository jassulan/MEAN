const script = require("../models/script");
const Script = require("../models/script");

exports.scriptGet = (req, res, next) => {
  Script.find({
    step1: req.query.step1,
    step2: req.query.step2,
    step3: req.query.step3,
    step4: req.query.step4,
    step5: req.query.step5
  }).then(script => {
    if (script) {
      res.status(200).json(script[0].imagePath);
    } else {
      res.status(404).json({ message: "script not found!" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "getting a script failed!"});
  });
}

exports.scriptCreate = (req, res, next) => {
  //const url = req.protocol + "://" + req.get("host");
  const script = new Script({
    step1: "12",
    step2: "GAAIN - 11C-PiB*",
    step3: "Re-allignment",
    step4: "FSL",
    step5: "Frontal lope",
    imagePath: "scripts/" + "AD01_50_70_PiB_PET.nii"
  });
  script.save().then(
    console.log("script added successfully")
    )
  .catch(error => {
    console.log(error);
  });
}

exports.scriptDelete = (req, res, next) => {
  script.remove({}, null)
  .then(result => {
    console.log(result);
    if(result.n > 0) {
      res.status(200).json({ message: "Profile deleted!" });
    } else {
      res.status(401).json({ message: "Not authorized!" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Deleting a profile failed!"});
  });
}




