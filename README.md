# WanderOn - Secure Authentication System

A robust full-stack authentication system built with modern web technologies. This project focuses on security, performance, and a premium user experience.

## Features

- **Secure Registration**: Server-side validation and password hashing using bcrypt.
- **JWT Authentication**: Stateless session management using JSON Web Tokens.
- **HttpOnly Cookies**: Prevents XSS attacks by storing tokens in secure, non-accessible cookies.
- **Premium UI**: Glassmorphic design with smooth transitions using Framer Motion.
- **Protected Routes**: Middleware-driven route protection on both frontend and backend.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, Vite, Framer Motion, Lucide Icons, Vanilla CSS
- **Security**: JWT, BcryptJS, Helmet, Cookie-parser

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (Local or Atlas)

### Setup

1. **Clone and Install**
   ```bash
   # Install Backend dependencies
   cd backend
   npm install

   # Install Frontend dependencies
   cd ../frontend
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=24h
   COOKIE_EXPIRE=1
   NODE_ENV=development
   ```

3. **Run the Application**
   ```bash
   # Run Backend (from /backend)
   node server.js

   # Run Frontend (from /frontend)
   npm run dev
   ```
