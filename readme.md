# Project Setup Guide

This guide will walk you through setting up the project in your local environment.

---

# Demo Video of Project

- video link - https://drive.google.com/file/d/1fhuOI6HNW0ossvNyNQ6QDoi2ZOTu66wV/view

## ScreenShots


![Demo Image](Images/Screenshot%202024-09-19%20054121.png)

![Demo Image](Images/Screenshot%202024-09-19%20054132.png)

![Demo Image](Images/Screenshot%202024-09-19%20054152.png)

![Demo Image](Images/Screenshot%202024-09-19%20054204.png)

## Project Overview

This web application uses the SQL, Express, React, and Node.js stack to create a dynamic form interface. The application features two types of forms that users can interact with, and it demonstrates proficiency in both frontend and backend development. The application includes form validation, database operations, and functionality for synchronizing data with an online Excel sheet.

## Features

- **Dynamic Forms**: Users can choose between "Form A" and "Form B" from the interface. Each form includes fields for Name, Country Code, and Phone Number. and we have a refresh button on the navbar which update the Excel sheet with new data from the SQL database.
- **Form Validation**: Ensures that the Name is not empty and contains only alphabetic characters, the Country Code is selected from a predefined list, and the Phone Number is numeric and conforms to the format specified by the Country Code.
- **Database Integration**: Uses SQL to store form data, capturing the form type, name, country code, and phone number.
- **Data Synchronization**: Connects to an online Excel sheet and includes a "Refresh" button to update the Excel sheet with new data from the SQL database.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: SQL (MySQL)
- **Data Synchronization**: Google Sheets API
- **Version Control**: Git

## API Endpoints

- **Submit Form Data**: `http://localhost:5000/api/forms/submit`

  - **Method**: POST
  - **Description**: Submits user data to the MySQL database.

- **Sync Excel Sheet**: `http://localhost:5000/api/excel/sync-excel`
  - **Method**: GET
  - **Description**: Fetches data from the MySQL database and updates the Excel sheet.

### Prerequisites

- Node.js and npm installed
- MySQL server installed
- Google Cloud project with Google Sheets API enabled

## Step 1: Cloning the Repository

1. Open your terminal.
2. Create a new folder in your file manager, let's call it `New Folder`.
3. Inside `New Folder`, run the following command to clone the repository:

   ```bash
   git clone https://github.com/Rohit-Sharmaa/formsApp.git
   ```

4. After cloning, open the `New Folder` in VS Code or your preferred code editor.

---

## Step 2: Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:

   ```bash
   npm i
   ```

3. Create a `.env` file inside the `frontend` folder and add the following environment variables:

   ```bash
   DB_HOST=localhost
   DB_USER=your_db_username
   DB_PASSWORD=your_sql_password
   DB_NAME=form_app
   DB_PORT=your_sql_port
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your_client_email
   GOOGLE_PRIVATE_KEY=your_private_key
   Excel_sheet_id=your_excel_sheet_id
   ```

   - **Note**: Replace the placeholders with your actual values.

---

## Step 3: Backend Setup

1. Go back to the root directory:

   ```bash
   cd ..
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install the backend dependencies:

   ```bash
   npm i
   ```

4. Create a `.env` file inside the `backend` folder and add the required environment variables similar to the frontend.

---

## Step 4: Database Setup

1. Ensure MySQL is installed on your local machine.
2. Open SQL Workbench and create a new database by running:

   ```sql
   CREATE DATABASE form_app;
   ```

3. Select the database:

   ```sql
   USE form_app;
   ```

4. Create a `forms` table by executing:

   ```sql
   CREATE TABLE forms (
     id INT AUTO_INCREMENT PRIMARY KEY,
     form_type VARCHAR(5),
     name VARCHAR(100),
     country_code VARCHAR(10),
     phone_number VARCHAR(15)
   );
   ```

5. Verify the table creation with:

   ```sql
   SELECT * FROM forms;
   ```

---

## Step 5: Setting up Google API for Spreadsheet

1. Go to [Google Cloud Console](https://console.cloud.google.com).
2. Create a new project and enable the **Google Sheets API** under **APIs & Services**.
3. Set up a **Service Account**:
   - Go to **IAM & Admin**.
   - Create a new service account, assign the role **Owner**, and save the project.
   - Generate a new key (JSON file) and download it.
4. Share your Google Spreadsheet with the service account email found in the JSON file.

> **Note:** For reference on setting up Google API Spreadsheet, you can refer to this [video](https://www.youtube.com/watch?v=FRDLT3-2Mr4&t=3s).

## Step 6: Environment Variable Setup for Backend

Add the following environment variables to your `.env` file in the `backend`:

```bash
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_sql_password
DB_NAME=form_app
DB_PORT=your_sql_port
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_client_email
GOOGLE_PRIVATE_KEY=your_private_key
Excel_sheet_id=your_excel_sheet_id
```

## Step 7: Running the Application

To run both the frontend and backend servers, follow these steps.

1. Open two terminals in your VS Code.

   Terminal 1: Frontend

   - Navigate to the frontend directory:

```
cd frontend
```

2. Run the frontend server:

```
npm start
```

Terminal 2: Backend

- Navigate to the backend directory:

```
cd backend
```

-Run the backend server:

```
npm run dev

```

Once the servers are running, you should see the following messages:

```
Server running on port 5000
MYSQL connected
```

For the frontend, your development server will be up and running at http://localhost:3000.

That's it! Your project is now set up. You can start working on your project and push changes to the repository.

> **Note:** If you face any difficulty, feel free to drop an email or create a new issue. I will be happy to help you.
