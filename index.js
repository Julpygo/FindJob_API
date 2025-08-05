import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import OffersRouter from './routes/routes.offers.js';

dotenv.config()
const app = express()

const PORT = process.env.PORT || 3006
app.set("port",PORT)

app.use(express.json())
app.use("/api/offers",OffersRouter)

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log("connect to DB"))
.catch((error)=> console.error(error))

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})