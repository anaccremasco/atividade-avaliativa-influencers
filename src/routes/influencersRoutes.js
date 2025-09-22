import express from "express";
import { getAllInfluencers, getInfluencersById} from "../controllers/influencersController.js";

const router = express.Router();

router.get("/", getAllInfluencers);
router.get("/:id", getInfluencersById)

export default router;