import express from "express";
import { createInfluencers, getAllInfluencers, getInfluencersById, createInfluencers} from "../controllers/influencersController.js";

const router = express.Router();

router.get("/", getAllInfluencers);
router.get("/:id", getInfluencersById);
router.post("/", createInfluencers);

export default router;