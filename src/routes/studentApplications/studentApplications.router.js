const express = require("express");

const {
  // getStudentApplicationController,
  postStudentApplicationController
} = require("./studentApplications.controller");

const router = express.Router();

// router.get("/", getStudentApplicationController);
router.post("/", postStudentApplicationController);

module.exports = {
  studentApplicationsRouter: router
};