import User from "../models/user.model";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
