🛍️ ElanWear — Full-Stack E-Commerce Platform (In Progress)

React.js | Node.js | Express.js | MongoDB

A professional-grade e-commerce platform under active development. This project demonstrates real-world full-stack architecture and backend workflows, focusing on modular API design, secure authentication, and scalable commerce logic.

🧠 Project Overview

ElanWear is a full-stack e-commerce application built with:

React.js — Frontend UI

Node.js & Express.js — Backend API

MongoDB — Database

It is designed to support product catalog browsing, user authentication, cart & order flows, and future payment integration.

This repository contains both frontend/ and backend/ folders, separating client and server logic for clearer maintainability and scalability.

🚧 Current Status

🚧 Backend development in progress
🚧 Core commerce APIs being implemented
✅ Frontend structure set up
✅ Project scaffolding completed

This README reflects the current development progress and is updated as features are added.

🎯 Features (Planned & In Progress)
🔐 Authentication

User registration and login

JWT-based auth

Password hashing with bcrypt

🛒 Commerce Logic

Product catalog APIs

Cart management

Order creation

Admin product management

Role-based access

📦 Future Enhancements

✔ Payment gateway integration (Stripe, PayPal, etc.)
✔ Order history & admin dashboards
✔ API documentation with Swagger

🧩 Tech Stack
Layer	Technology
Frontend	React.js
UI Styling	Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB
Authentication	JWT, bcrypt
API Testing	Postman / Insomnia
Deployment	Vercel / Render
📁 Project Structure
-lanWear/
├─ backend/       # API server files
├─ frontend/      # React client application
├─ .gitignore
└─ README.md

🔧 Setup & Installation
1. Clone the project
git clone https://github.com/Rihofficial/-lanWear.git
cd -lanWear

2. Backend Setup
cd backend
npm install


Create a .env file in backend/ with:

PORT=5000
MONGO_URI=<your-mongo-uri>
JWT_SECRET=<your-jwt-secret>


Start backend:

npm start

3. Frontend Setup
cd ../frontend
npm install


Start frontend:

npm start


Frontend will run on http://localhost:3000 by default.

🧠 How It Works

Frontend: React app handles UI, routing, and user interactions.

Backend: Express API handles business logic, database operations, and authentication workflows.

Database: MongoDB stores users, products, and cart/order information.

This separation reflects real MERN stack architecture and prepares the system for scalable feature additions.

🚀 Development Roadmap
Milestone	Status
Auth & Users	🚧 In Progress
Product CRUD APIs	🚧 In Progress
Cart Logic	🚧 Planned
Orders & Checkout	🚧 Planned
Admin Role	🚧 Planned
Payment Integration	🚧 Planned
Deployment	🚧 Planned
📌 Why This Matters

Even though ElanWear isn’t complete yet, this project is being built with real-world engineering patterns:

✔ Separation of concerns (client vs server)
✔ Modular API routes
✔ Authentication & session security
✔ Database modeling
✔ Clear development roadmap
