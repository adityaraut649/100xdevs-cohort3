const { Router } = require("express");
const { userModel } = require("../db");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    await userModel.create({
      email,
      password,
      firstName,
      lastName,
    });

    res.json({
      message: "User created successfully",
    });

  } catch (err) {
    res.status(500).json({
      message: "Error creating user",
      error: err.message,
    });
  }
});

userRouter.post("/signin", (req, res) => {
  res.json({ message: "signin route" });
});

userRouter.get("/purchases", (req, res) => {
  res.json({ message: "purchases route" });
});

module.exports = {
  userRouter,
};