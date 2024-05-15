// app.js

import express from "express";
import config from "./confing";
import cors from "cors";
import inventario from "./routes/inventario.routes";

const app = express();

// settings
app.use(cors());
app.set("port", config.port);

// middlewares
app.use(express.json());

// Middleware para manejar errores de análisis JSON
app.use((error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
      console.error('Error de análisis JSON:', error);
      return res.status(400).json({ error: 'Error de análisis JSON' });
    }
    next();
  });
  

app.use(express.urlencoded({ extended: false }));

app.use(inventario);


export default app;
