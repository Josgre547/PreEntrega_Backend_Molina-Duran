import express from "express";
import router from  "./router/index.js";
import __dirname from "./dirname.js";

const PORT = 8080;
const app = express();

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("static",express.static("public"));

//Rutas
app.use("/api", router);

app.listen(PORT, () =>{
     console.log(`Motores Encendidos Y Listos Para Arrancar!! Puerto: ${PORT}`)
})