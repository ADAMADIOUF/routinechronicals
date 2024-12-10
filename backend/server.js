import express from "express"
import dotenv from 'dotenv'
import postRoutes from './router/routePost.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()
const app = express()

const port = process.env.PORT || 5000
app.use(express.json())

app.use('/api', postRoutes)
app.listen(port, () => console.log(`The server running at port ${port}`))