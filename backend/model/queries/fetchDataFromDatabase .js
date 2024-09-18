import connection from "../../config/db.js";
const fetchDataFromDatabase = async () => {
  try {
    const [rows] = await connection
      .promise()
      .execute("SELECT id, name, country_code, phone_number FROM forms");

    console.log(rows);

    return rows.map((row) => ({
      Id: row.id,
      Name: row.name,
      "Country Code": row.country_code,
      "Phone Number": row.phone_number,
    }));
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    throw error;
  }
};

export default fetchDataFromDatabase;
