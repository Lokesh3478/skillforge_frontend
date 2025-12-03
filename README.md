<h1 align="center">🎓 SkillForge Frontend</h1>
<p align="center">AI-powered adaptive learning platform built with React + Tailwind</p> <p align="center"> <img src="https://img.shields.io/badge/Frontend-React.js-blue" /> <img src="https://img.shields.io/badge/Styling-TailwindCSS-38bdf8" /> <img src="https://img.shields.io/badge/Build-Vite-646cff" /> <img src="https://img.shields.io/badge/API-Axios-orange" /> <img src="https://img.shields.io/badge/State-Context%20API-yellow" /> </p>
🌟 Overview

SkillForge Frontend delivers:

A clean, modern UI for learners

Smooth routing and protected navigation

Fully functional authentication pages

Integration with backend JWT login & registration

Responsive design using Tailwind CSS

🛣️ Routing Structure
⚡ Main Routes <br>
/ → Landing Page <br>
/login → Login <br>
/register → Register <br>
/home → Home Dashboard (Protected) <br>
/courses → Course List (Protected) <br>
/course/:id → Course Dashboard (Protected) <br>

🔐 Protected Routes

Protected routes use:

AuthContext

JWT from localStorage

Custom PrivateRoute

This ensures only authenticated users can access dashboard and course pages.

🎨 Styling
✨ Tailwind CSS Highlights

Fully responsive layout

Utility-first styling

Custom design for:

Input fields

Buttons

Navigation bars

Course cards

Dashboard layout

⚙️ Project Setup
1️⃣ Clone the Repository
git clone https://github.com/Lokesh3478/skillforge_frontend.git
cd skillforge_frontend

2️⃣ Install Dependencies
npm install

3️⃣ Run Local Dev Server
npm run dev

➡ App runs at http://localhost:5173

📦 Dependencies
💻 Core

React.js

Vite

React Router DOM

Axios

🎨 Styling

Tailwind CSS

PostCSS

🛠 Tooling

ESLint

Prettier (optional)

🚧 Upcoming Enhancements

Course enrollment UI

User profile & settings page

Instructor/Administrator dashboards

Progress tracking & analytics UI

Integration with AI-based assessment modul

### `page layouts`

## `landing page`

![alt text](readme_images/image0.png)

## `login and register page`

![alt text](readme_images/image.png)
<br>
![alt text](readme_images/image-1.png)

## `Home page`

![alt text](readme_images/image-2.png)

## `Course List page`

![alt text](readme_images/image-3.png)

## `Course Dashboard`

![alt text](readme_images/image-4.png)
