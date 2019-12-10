const { logger } = require("../../utils/logger");
const db = require("../../db/index.js");

const getApplicationsController = (req, res) => {
  // Applications is the name of the collection I created in firebase
  db.collection("Applications")
    .get()
    .then(snapshot => {
      console.log("******************");
      res.json({
        cohort_apps: snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        })
      });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
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
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// req.params — to access request route parameters that are part of the path (i.e. if there is a :userID variable in your route, you could access it via req.params.userId)
const getApplicationController = (req, res) => {
  db.collection("Applications")
  .get("/:id")
  .then(snapshot => {
    console.log("!!!!!!!!!!!");
    // access request route parameters that are part of the path (id) via req.params.id
      const cohort_id = req.params.id
      res.status(200).json({
        cohort: snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
        }).filter(doc => {
          if (doc.id === cohort_id) {
            return {
              id: doc.id
            }
          }
        })
      });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

module.exports = {
  getApplicationsController,
  postApplicationController,
  getApplicationController
};