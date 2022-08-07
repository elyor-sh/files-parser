import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import {MONGO_URI, PORT} from "./config/environment";
import filesRoute from "./app/files/files.route";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({}))

//ROUTES
app.use('/file', filesRoute)


const start = async () => {
    try {

        await mongoose.connect(MONGO_URI)
        await app.listen(PORT, () => console.log(`Сервер запустился в порте = ${PORT}`))

    }catch (e) {
        console.log(e)
        throw new Error(`Ошибка при запуске сервера`)
    }
}

start()