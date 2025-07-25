🧩 Soft Nexis Internship — Task 1 (Backend)

This is the backend task submission for **Soft Nexis Internship**.  
It is built using **Node.js**, **Express**, and **MongoDB**, and includes full CRUD API operations for managing products.

📁 Project Structure
softnexis-task1/
├── models/ # Mongoose schema
├── controllers/ # API logic for CRUD
├── routes/ # Express routes
├── middleware/ # Input validation
├── server.js # Main Express app
├── .env # (Not uploaded) MongoDB URI config
├── package.json

🔧 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- express-validator
- dotenv

✅ Features Implemented

- POST /products → Create a product  
- GET /products → Get all products  
- PUT /products/:id → Update a product  
- DELETE /products/:id → Delete a product  
- Input validation using `express-validator`

🧪 Tested With

- [Thunder Client](https://www.thunderclient.com/) in VS Code

⚠️ Note

`.env` file is excluded for security reasons. It should contain:
```
MONGODB_URI=mongodb://localhost:27017/softnexisdb
```

How to Run

```bash
npm install
node server.js
```

✨ Submission by @suga-25

