require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const cors = require('cors') // Import cors

// express app
const app = express()

// Enable CORS
app.use(cors({
  // origin: 'http://localhost:3000', // Adjust based on your frontend's domain in development/production
  origin: 'https://workout-buddy-frontend-qwcb.onrender.com', // Adjust based on your frontend's domain in development/production
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Add allowed HTTP methods
  credentials: true // If you need to send cookies or authorization headers
}))

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT || 4000, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
