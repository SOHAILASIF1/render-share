import express from 'express'
import router from './routes/routes.js'
import cors from 'cors'
import DBConnection from './database/db.js'
import path from 'path'

const app=express()
app.use(cors({
    origin: "https://render-share.onrender.com", // Replace '*' with your frontend URL in production
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // Allow credentials
  }));
app.use('/',router)
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve()
DBConnection()
app.use(express.static(path.join(__dirname, "/client/build")));




// Fallback route for SPA
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client","build", "index.html"));
});


app.listen(PORT,()=>console.log(`server is running at ${PORT}`))
