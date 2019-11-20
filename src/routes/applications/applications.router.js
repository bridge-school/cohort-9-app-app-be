const express = require('express');

const { applicationsController } = require("./applications.controller");

const router = express.Router();

router.get("", applicationsController);

module.exports = {
  applicationsRouter: router
}


