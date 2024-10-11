import express from 'express'
import router from './routes/routes.js'
import cors from 'cors'
import DBConnection from './database/db.js'
import path from 'path'

const app=express()
app.use(cors())
app.use('/',router)
const PORT=9000
const __dirname = path.resolve()
DBConnection()
app.use(express.static(path.join(__dirname, "/client/build")));




// Fallback route for SPA
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client","build", "index.html"));
});


app.listen(PORT,()=>console.log(`server is running at ${PORT}`))
