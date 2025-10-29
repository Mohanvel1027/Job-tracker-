# Job-Tracker
# Job-Tracker
# 🧭 IBM-NJ Job Application Tracker

A full-stack web application designed to help users **track, manage, and monitor** their job applications efficiently.  
Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, it enables users to organize job opportunities, update statuses, and visualize progress across their job search journey.

---

## 📘 Project Overview

The **IBM-NJ Job Application Tracker** allows users to:

- Add, view, and edit job applications.
- Track job application statuses (Applied, Interview, Offer, Rejected, etc.).
- Filter and sort applications by company, date, or status.
- Store all user data securely in the cloud (MongoDB).
- Provide a simple and intuitive user interface.

### 🧩 Tech Stack

| Layer        | Technology |
|---------------|-------------|
| Frontend      | React.js, Tailwind CSS |
| Backend       | Node.js, Express.js |
| Database      | MongoDB Atlas |
| Authentication| JSON Web Token (JWT) |
| Deployment    | Vercel (Frontend), Render/Heroku (Backend) |

##folder structure
ibm-nj-job-tracker/
│
├── backend/
│   ├── server.js              # Entry point for Node.js backend
│   ├── package.json
│   ├── .env                   # Environment variables
│   ├── config/
│   │   └── db.js              # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js
│   │   └── jobController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Job.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── jobRoutes.js
│   └── middleware/
│       └── authMiddleware.js
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Page components (Dashboard, Login, Register)
│   │   ├── services/          # API service functions
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
