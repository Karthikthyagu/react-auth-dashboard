# React Auth Dashboard

A modern, responsive authentication-based dashboard built with React.js.

## Features
- User Login & Registration (client-side auth)
- Protected Dashboard route
- Responsive UI (Desktop, Tablet, Mobile)
- Task overview dashboard
- Logout flow
- Clean and scalable folder structure

## Tech Stack
- React.js
- React Router
- CSS (Responsive Design)
- Vite

## Project Structure
src/
├─ components/
├─ pages/
│ ├─ Login.jsx
│ ├─ Register.jsx
│ └─ Dashboard.jsx
├─ styles/
├─ assets/
└─ main.jsx


## Authentication Flow
- User logs in → token stored in localStorage
- Protected dashboard route checks token
- Logout clears storage and redirects to login

## Future Improvements
- JWT authentication via backend
- Role-based access control
- API-driven task management
- Database integration

## Author
Karthik Thyagu

