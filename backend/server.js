import express from "express";
import cors from "cors";
import formRoutes from "./routes/formRoutes.js";
import syncExcel from "./services/excelService.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoutes);
app.use("/api/excel", syncExcel);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
