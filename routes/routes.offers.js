import { Router } from "express";
import {prueba, offerCreate} from "../controllers/controllers.offers.js";

const router = Router()

router.get("/",prueba);
router.post("/Create",offerCreate)

export default router