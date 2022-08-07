import {config} from 'dotenv'

const environment = process.env.NODE_ENV

if(!environment){
    throw new Error(`Не найдены системные переменные!`)
}

config({
    path: `.env.${environment}`
})

export const PORT = Number(process.env.PORT) || 4200
export const MONGO_URI = process.env.MONGO_DB_URI as string