const express = require("express");

const {
  getAapplicationsController,
  postApplicationController
} = require("./applications.controller");

const router = express.Router();

router.get("", getAapplicationsController);
router.post("", postApplicationController);

module.exports = {
  applicationsRouter: router
};
