import { Router } from "express";
import {getOffer, offerCreate} from "../controllers/controllers.offers.js";

const router = Router()

router.get("/consultas",getOffer);
router.post("/Create",offerCreate)

export default router