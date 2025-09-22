import express from "express";
import { createInfluencers, getAllInfluencers, getInfluencersById, createInfluencers, deleteInfluencer, uptadeInfluencer} from "../controllers/influencersController.js";

const router = express.Router();

router.get("/", getAllInfluencers);
router.get("/:id", getInfluencersById);
router.post("/", createInfluencers);
router.delete("/:id", deleteInfluencer);
router.put("/:id", uptadeInfluencer)


export default router;