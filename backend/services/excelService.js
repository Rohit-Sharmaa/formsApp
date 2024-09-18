import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

import fetchDataFromDatabase from "../model/queries/fetchDataFromDatabase .js";
import dotenv from "dotenv";
dotenv.config();
const syncExcel = async (req, res) => {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      process.env.Excel_sheet_id,
      serviceAccountAuth
    );

    await doc.loadInfo();

    await doc.updateProperties({ title: "FormSheetExcel" });

    const sheet = doc.sheetsByIndex[0];
    const rowCount = sheet.rowCount;
    if (rowCount > 0) {
      await sheet.clearRows();
    }

    const HEADERS = ["Id", "Name", "Country Code", "Phone Number"];
    await sheet.setHeaderRow(HEADERS);

    let rows = await fetchDataFromDatabase();
    await sheet.addRows(rows);
    res.status(200).json({ message: "updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export default syncExcel;
