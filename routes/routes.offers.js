import { Router } from "express";
import {prueba} from "../controllers/controllers.offers.js";

const router = Router()

router.get("/",prueba)

export default router