# Workout Buddy

Workout Buddy is a MERN stack application that helps users manage their workouts. The app includes user authentication, workout management, and a personalized dashboard to track your fitness journey.

## Features
- **User Authentication:** Secure login and signup using **JWT** and **bcrypt**.
- **Homepage:** Displays workouts of the logged-in user.
- **Add Workout:** Add new workouts to your personalized dashboard.
- **Delete Workout:** Remove workouts that are no longer needed.
- **Routes:**
  - `/`: Homepage displaying user-specific workouts.
  - `/signup`: Create a new account.
  - `/login`: Log in to your account.

## Tech Stack
- **Frontend:** ReactJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT and bcrypt for secure user authentication

## Setup Instructions
Follow these steps to get the project running locally.

### Prerequisites
- Node.js installed on your system
- MongoDB instance running locally or on the cloud
- Git installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/workout-buddy.git
   cd workout-buddy
    ```
2. Install dependencies for the backend:
    ```bash
    cd backend
    npm install
    ```
3. Install dependencies for the frontend:
    ```bash
    cd ../frontend
    npm install
    ```

### Configuration
1. Create a .env file in the backend directory with the following variables:
    ```
    PORT=4000
    MONGO_URI=your-mongodb-connection-string
    SECRET=your-jwt-secret
    ```

### Running the Application
1. Start the backend server:
    ```
    cd backend
    npm run dev
    ```
2. Start the frontend development server:
    ```
    cd frontend
    npm run start
    ```
3. Open your browser and navigate to http://localhost:3000 to view the app.

### Folder Structure
    Workout Buddy/
    │
    ├── backend/
    │   ├── models/
    │   ├── routes/
    │   ├── middlewares/
    │   ├── controllers/
    │   ├── server.js
    │   └── .env
    │
    ├── frontend/
    |   ├── public/
    │   |   └── index.html
    │   └──  src/
    │       ├── components/
    │       ├── context/
    │       ├── hooks/
    │       ├── pages/
    │       ├── App.js
    │       └── index.js
    │       └── index.css    │
    └── README.md

### Future Enhancements
1. Add workout categories and tracking features.
2. Implement workout analytics and visualizations.
3. Enhance the UI/UX for a more polished user experience.

### Contribution  
Contributions are welcome! If you have suggestions for improvements or want to report issues, feel free to open a pull request or create an issue in the repository.  
