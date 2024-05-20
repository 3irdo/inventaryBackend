// app.js
import express from "express";
import config from "./confing";
import cors from "cors";
import inventario from './routes/inventario.routes'
import visitasRoutes from './routes/visita_tecnica.routes'
import authRoutes from './routes/auth.routes';

const app = express();

// Configuraciones
app.use(cors());
app.set("port", config.port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware para manejar errores de análisis JSON
app.use((error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
      console.error('Error de análisis JSON:', error);
      return res.status(400).json({ error: 'Error de análisis JSON' });
    }
    next();
});

// Rutas de autenticación
app.use(inventario)
app.use(visitasRoutes)
app.use('/auth', authRoutes);


export default app;
