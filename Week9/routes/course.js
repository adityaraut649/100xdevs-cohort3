const { Router } = require("express");
const {courseModel} = require("../ds");
const courseRouter = Router();

courseRouter.post("/purchases", (req, res) => {
  res.json({
    message: "hello world",
  });
});

courseRouter.get("/mess", (req, res) => {
  res.json({
    message: "hello world",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
