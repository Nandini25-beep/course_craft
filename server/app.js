const express = require("express")
const connectDB =require("./config/db")
const dns = require("dns")
const dotenv = require("dotenv")
const courseRoute = require("./routes/courseRoutes")
const authRoute = require("./routes/authRoutes")

dns.setServers(["1.1.1.1","8.8.8.8"])
dotenv.config()
const app = express()
app.use(express.json())


app.get("/welcome",(req,res)=>{
    res.send("welcome back")
})
app.use("/api/auth",authRoute)
app.use("/api/courses",courseRoute)
connectDB()

app.listen(3000,()=>{
    console.log("listening to the PORT")
})