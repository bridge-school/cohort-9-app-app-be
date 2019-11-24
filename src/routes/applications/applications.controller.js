const {logger} = require("../../utils/logger")
const db = require("../../db/index.js")

const applicationsController =  (req, res) => {
    // Applications is the name of the collection I created in firebase
    db.collection("Applications")
        .get()
        .then(snapshot => {
            res.json({
                allApps:  snapshot.docs.map(doc => {       
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                }) 
            })
        })
        .catch(err => res.json(err) )
};

module.exports = {
    applicationsController
}
