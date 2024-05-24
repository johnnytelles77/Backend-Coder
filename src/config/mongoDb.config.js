import mongoose from "mongoose"

const urlDb = "mongodb+srv://Admin:Admin123456@codercluster.y7pmtd1.mongodb.net/ecomerce"


export const connectMongoDB = async () =>{
    try {
        ///conexion con la base de datos direecion de la api
        mongoose.connect(urlDb)
        console.log("Mongo DB Conectado")
    } catch (error) {
        console.log(error)
    }
}