const express = require("express");

const {
  getApplicationsController,
  postApplicationController,
  getApplicationController,
} = require("./applications.controller");

const router = express.Router();

router.get("/", getApplicationsController);
router.post("/", postApplicationController);
router.get("/:id", getApplicationController);

module.exports = {
  applicationsRouter: router
};
