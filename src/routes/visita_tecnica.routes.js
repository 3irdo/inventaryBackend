// visita_tecnica.routes.js

import { Router } from 'express'
import { createNewVisitaTecnica, getVisitasTecnicas } from "../controllers/visitas.controller";


const router = Router()

router.get("/historialVisitasTecnicas", getVisitasTecnicas)

router.post("/historialVisitasTecnicas", createNewVisitaTecnica)



export default router