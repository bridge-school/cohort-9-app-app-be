const { logger } = require("../../utils/logger");
const db = require("../../db/index.js");

const postStudentApplicationController = (req, res) => {
  db.collection("StudentApplications")
    .add({
      ...req.body
    })
    .then(docRef => {
      res.status(201).json({
        id: docRef.id,
        message: "New student application was successfully created"
      });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

module.exports = {
  // getStudentApplicationController,
  postStudentApplicationController
};

