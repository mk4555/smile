import express from "express";
import { getItems, addItem } from "../controllers/items.js";
const router = express.Router();

router.get("/", getItems);
router.post("/add", addItem);

export default router;
