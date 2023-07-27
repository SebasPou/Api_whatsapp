const express = require('express');
const apiRutas = require ('./routes/rutas.routes');

const app = express();
const PUERTO = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/", apiRutas);
app.listen(PUERTO, ()=>{
    console.log("en el puerto" + PUERTO);
})