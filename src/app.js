import express from "express";
import router from "./routes/index.js"
import { connectMongoDB } from "./config/mongoDb.config.js";
import session from "express-session"
import MongoStore from "connect-mongo"

connectMongoDB();


const app = express();

/// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://Admin:Admin123456@codercluster.y7pmtd1.mongodb.net/ecomerce",
    ttl: 15
  }),
  secret: "CodigoSecreto",
  resave: true
}))

app.use("/api", router);




app.listen(8088, () => {
  console.log("Servidor listo en puerto 8088");
});
