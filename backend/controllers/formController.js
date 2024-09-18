import db from "../config/db.js";

export const submitForm = (req, res) => {
  const { formType, name, countryCode, phoneNumber } = req.body;
  const sql =
    "INSERT INTO forms (form_type, name, country_code, phone_number) VALUES (?, ?, ?, ?)";
  db.query(sql, [formType, name, countryCode, phoneNumber], (err, result) => {
    if (err) throw err;
    res.status(200).send("Form submitted successfully!");
  });
};

export const getAllForms = (req, res) => {
  const sql = "SELECT * FROM forms";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
