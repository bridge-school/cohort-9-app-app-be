const { logger } = require("../../utils/logger");
const db = require("../../db/index.js");

const getApplicationsController = (req, res) => {
  // Applications is the name of the collection I created in firebase
  db.collection("Applications")
    .get()
    .then(snapshot => {
      res.json({
        allApps: snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        })
      });
    })
    .catch(err => res.json(err));
};
const postApplicationController = (req, res) => {
  db.collection("Applications")
    .add({
      ...req.body
    })
    .then(docRef => {
      res.status(201).json({
        id: docRef.id,
        message: "Cohort from successfully created"
      });
    })
    .catch(error => {
      res.json({ error });
    });
};

module.exports = {
  getApplicationsController,
  postApplicationController
};

// return res.json({
//     data: snapshot.docs
//   });
