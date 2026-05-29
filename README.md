# GitHub Profile Analyzer API

A backend REST API built using Node.js, Express.js, MySQL, and GitHub Public API.

This project fetches GitHub user profile data, analyzes useful insights, stores them in MySQL, and provides APIs to retrieve analyzed profiles.

---

# Features

* Fetch GitHub user profile using username
* Analyze profile statistics
* Store insights in MySQL database
* Fetch all analyzed profiles
* Fetch single analyzed profile
* Prevent duplicate profile entries
* Update existing profile automatically
* REST API architecture
* Error handling middleware

---

# Tech Stack

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* Axios
* dotenv
* cors

---

# Project Structure

```bash
github-profile-analyzer/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── .env
├── package.json
├── server.js
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Godboyg/Github-Profile-Analyze
```

```bash
cd github-profile-analyzer
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Setup Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=github_analyzer
DB_PORT=3306
```

---

## 4. Create MySQL Database

Open MySQL terminal:

```bash
mysql -u root -p
```

Create database:

```sql
CREATE DATABASE github_analyzer;
```

---

## 5. Run Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

# Server URL

```bash
http://localhost:5000
```

---

# Production Deployment

### Backend

* Render
* Railway

### Database

* Railway MySQL
