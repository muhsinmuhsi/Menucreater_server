import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import menusroute from './routes/menus'
import menuitems from './routes/menuItems'
import cors from 'cors'

dotenv.config()

const app=express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use(cors())

app.use('/api',menusroute)
app.use('/api',menuitems)

mongoose.connect(process.env.MONGO_URI ||'' )
    .then(()=>console.log('mongodb connected'))
    .catch((err)=>console.log(err))

    app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })