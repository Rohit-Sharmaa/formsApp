import { Router } from "express";
import { submitForm, getAllForms } from "../controllers/formController.js";

const router = Router();

router.post("/submit", submitForm);
router.get("/forms", getAllForms);

export default router;
