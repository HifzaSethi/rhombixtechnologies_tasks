## ✈️ Travel Booking System

A fully responsive full-stack Flight Booking Web Application built using Next.js, Node.js, Express, MongoDB, and JWT Authentication.

This project was developed as Task 3 of my Web Development Internship at Rhombix Technologies.

# 🚀 Features

# 👤 User Features

User Registration & Login (JWT Authentication)

Secure Logout

Search Flights (Filter by From, To, Airline, Date)

Book Flights

View My Bookings

Cancel Booking

Fully Responsive UI

# 🛠️ Admin Features

Admin Role-based Access

Add New Flights

Protected Admin Routes

# 🏗️ Project Flow

1️⃣ Authentication Flow

User registers or logs in

Backend generates JWT token

Token stored in localStorage

Protected routes require token

Middleware verifies token

# 2️⃣ Flight Search Flow

User enters search filters

Frontend sends GET request:

/api/flights/search

Backend filters flights from MongoDB

Results displayed using FlightCard component

# 3️⃣ Booking Flow

User clicks "Book"

Redirect to booking page

User submits passenger details

POST request:

/api/booking/book

# Backend:

Creates booking

Decreases available seats

Saves booking in MongoDB

# 4️⃣ My Bookings Flow

Protected route:

/api/booking/mybookings

Backend fetches user-specific bookings

Displays all bookings dynamically

# 5️⃣ Admin Flow

Admin login

Access /admin

Add flight via POST:

/api/flights/add

Admin-only middleware validation

# 🧰 Technologies Used

# Frontend

Next.js (App Router)

React.js

CSS Modules

Fetch API

# Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcrypt.js

Database

MongoDB Atlas / MongoDB Compass

# 🔐 Authentication & Security

JWT-based authentication

Protected Routes

Role-based Authorization (User/Admin)

Middleware for token validation

# 📂 Project Structure

Frontend (Next.js)
│
├── app/
│ ├── login/
│ ├── register/
│ ├── search/
│ ├── booking/[id]/
│ ├── mybookings/
│ └── admin/
│

# Backend (Node.js + Express)

│
├── models/
├── routes/
├── middleware/
└── server.js
