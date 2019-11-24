const express = require("express");

const {
  getApplicationsController,
  postApplicationController
} = require("./applications.controller");

const router = express.Router();

router.get("", getApplicationsController);
router.post("", postApplicationController);

module.exports = {
  applicationsRouter: router
};
