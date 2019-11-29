const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const {
  applicationsRouter
} = require("../routes/applications/applications.router");
const {
  studentApplicationsRouter
} = require("../routes/studentApplications/studentApplications.router");
// const { <newRoute>Router } = require("../routes/<newRoute>/<newRoute>.router");

const app = express();
// router.use("/<newRoute>", <newRoute>Router);
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://nifty-yonath-7c3e65.netlify.com"
  );

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "*");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  //   res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

const router = express.Router();
router.use("/health", healthRouter);
router.use("/applications", applicationsRouter);
router.use("/applications/students", studentApplicationsRouter);
module.exports = router;
