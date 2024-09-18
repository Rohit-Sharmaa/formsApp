import { Router } from "express";
import syncExcel from "../services/excelService";

const router = Router();

router.get("/sync-excel", syncExcel);

export default router;
