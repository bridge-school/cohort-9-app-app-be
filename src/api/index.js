const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const { applicationsRouter } = require("../routes/applications/applications.router");
const { studentApplicationsRouter } = require("../routes/studentApplications/studentApplications.router");
// const { <newRoute>Router } = require("../routes/<newRoute>/<newRoute>.router");

const router = express.Router();
router.use("/health", healthRouter);
router.use("/applications", applicationsRouter);
router.use("/applications/students", studentApplicationsRouter);
// router.use("/<newRoute>", <newRoute>Router);

module.exports = router;
