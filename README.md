# Oncolab Diagnostics - Patient Payment Management System

## Overview
This project serves the purpose of handling patient payment data at **Oncolab Diagnostics**. It allows storing, fetching, and verifying patient transactions for auditing and financial tracking.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB

## Features

### 1. **Landing Page**
- Contains a **Navbar** and **Button Group** for navigation.
- "Create" button allows data entry for patient payments.
- Payment details are stored in **MongoDB**.

### 2. **Bill Transaction Report**
- Accessible via **Sidebar > Financial MIS Report > Bill Transaction Report**.
- Displays all stored transaction data.
- Search functionality to find individual patient bill details easily.

### 3. **Billing Statement**
- Accessible via **Sidebar > Financial MIS Report > Billing Statement**.
- Allows fetching data based on **From Date & To Date**.
- Enables different filtering options for financial analysis.

## Setup Instructions
### **Backend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/oncolab-diagnostics.git
   cd oncolab-diagnostics/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add MongoDB connection string:
   ```sh
   MONGO_URI=mongodb://localhost:27017/hoapitalbill
   PORT=3000
   ```
4. Start the server:
   ```sh
   node server.js
   ```

### **Frontend Setup**
1. Navigate to frontend directory:
   ```sh
   cd ../ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm run dev
   ```

## Usage
- Open `http://localhost:3000` in the browser.
- Use the **Create** button to enter payment details.
- Navigate to **Bill Transaction Report** to view and search stored transactions.
- Use **Billing Statement** to fetch data by date range.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss proposed modifications.

## License
This project is licensed under the MIT License.

---
**Developed for Oncolab Diagnostics by [Your Name]** 🚀

