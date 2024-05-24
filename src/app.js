import express from "express";
import router from "./routes/index.js"
import { connectMongoDB } from "./config/mongoDb.config.js";

connectMongoDB();


const app = express();

/// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);




app.listen(8088, () => {
  console.log("Servidor listo en puerto 8088");
});
