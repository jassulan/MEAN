const Profile = require("../models/profile");

exports.profileCreate = (req, res, next) => {
  const profile = new Profile({
    name: req.body.name,
    surname: req.body.surname,
    imagePath: "images/" + req.file.filename,
    userId: req.userData.userId
  });
  profile.save().then(createdProfile => {
    res.status(201).json({
      message: "Profile added successfully",
      profile: {
        ...createdProfile,
        id: createdProfile._id
      }
    });
  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a profile failed!"});
  });
}


exports.profileUpdate = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    imagePath = "images/" + req.file.filename;
  }
  const profile = new Profile({
    _id: req.body.id,
    name: req.body.name,
    surname: req.body.surname,
    imagePath: imagePath,
    userId: req.userData.userId
  });
  Profile.updateOne({ _id: req.params.id, userId: req.userData.userId }, profile).then(result => {
    if(result.n > 0) {
      res.status(200).json({ message: "Update successful!" });
    } else {
      res.status(401).json({ message: "Not authorized!" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Updating a profile failed!"});
  });
}

exports.profileGet = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const profileQuery = Profile.find();
  let fetchedProfiles;
  if (pageSize && currentPage) {
    profileQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  profileQuery
    .then(documents => {
      fetchedProfiles = documents;
      return Profile.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Profiles fetched successfully!",
        profiles: fetchedProfiles,
        maxProfiles: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching a profile failed!"});
    });
}

exports.profileGetById = (req, res, next) => {
  Profile.findById(req.params.id).then(profile => {
    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ message: "Profile not found!" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching a profile failed!"});
  });
}

exports.profileGetByUserId = (req, res, next) => {
  Profile.findOne( {userId: req.userData.userId}).then(profile => {
    if (profile) {
      res.status(200).json({ message: "user_founded", profile: profile});
    } else {
      res.status(200).json({ message: "no_user_founded" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching a profile failed!"});
  });
}

exports.profileDelete = (req, res, next) => {
  Profile.deleteOne({ _id: req.params.id, userId: req.userData.userId })
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
