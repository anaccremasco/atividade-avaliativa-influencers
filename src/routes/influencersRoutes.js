import express from "express";
import { getAllInfluencers} from "../controllers/influencersController.js";

const router = express.Router();

router.get("/", getAllInfluencers);

export default router;