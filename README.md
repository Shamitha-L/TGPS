# Fullstack Dashboard

Simple dashboard (Express backend + React frontend) that demonstrates fetching
user data and displaying it in a clean UI.

## What it implements- Backend (Express) running on port 5000 with endpoint `/api/users` returning

the first 5 users from `https://jsonplaceholder.typicode.com/users`.- Frontend (React) showing:
Header with "My Dashboard" and today's date- Three statistics cards (Total Users, Completed Tasks, Pending Tasks)- User table (Name, Email, Phone, Company)- Task list (fetches 5 todos and allows UI-only toggle of completion)

## Setup

### 1 Clone repo

```bash
git clone https://github.com/Shamitha-L/TGPS.git
cd TGPS - ASSIGNMENT

### 2 Start backend
cd backend
npm install
npm start

 ### 3 Start frontend
cd frontend
npm install
npm start

Frontend runs on http://localhost:3000 and is configured to proxy API calls to
http://localhost:5000 .
```
