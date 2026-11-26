import express from "express";
import { getUserPage } from "../controllar/userControllar.js";

const router = express.Router();

router.get("/:id", getUserPage);

export default router;
