const { logger } = require("../../utils/logger");
const db = require("../../db/index.js");
const moment = require("moment");

const getApplicationsController = (req, res) => {
  // Applications is the name of the collection I created in firebase

  console.log(req.query);
  //If the query has parameter with open =1 then filter the data to user
  if (req.query && req.query.open && req.query.open === "1") {
    const today = moment().format();

    db.collection("Applications")
      //First we filter open apps
      .where("dateOpen", "<=", today)
      .get()
      //Then check if application is not closed
      .then(snapshot => {
        console.log("******************");
        const result = snapshot.docs.filter(doc => {
          return doc.data().dateClose >= today;
        });

        res.json({
          cohort_apps: result.map(doc => {
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
  } else {
    //if query is without parameter then show all cohort to user
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
  }
};

const postApplicationController = (req, res) => {
  db.collection("Applications")
    .add({
      ...req.body
    })
    .then(docRef => {
      res.status(201).json({
        id: docRef.id,
        message: "Cohort form successfully created"
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

