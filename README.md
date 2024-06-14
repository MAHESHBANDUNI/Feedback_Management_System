# Simple Feedback Management System

## Description
A simple feedback management system with a Node.js backend using Express and TypeScript and a React frontend using TypeScript.

## Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd feedback-backend
 
2. Install dependencies:
   ```sh
   npm install

3. Start the backend server:
   ```sh
   npx ts-node src/index.ts

## Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd feedback-frontend

2. Install dependencies:
   ```sh
   npm install

3. Start the frontend server:
   ```sh
   npm start

## Features
1. Backend: Node.js, Express, TypeScript
* Retrieve all feedback entries
* Submit new feedback
* In-memory data storage

2. Frontend: React, TypeScript
* Form to submit new feedback
* Display list of all feedback entries


### Notes
1. This setup uses an in-memory data structure to store feedback. Restarting the server will clear the data.
2. The backend runs on port 8000 by default, and the frontend runs on port 3000 as well. Ensure ports are not conflicting.
