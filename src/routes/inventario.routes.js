// getInventario.routes.js

import { Router } from "express";
import { createNewProduct, getInventario, getEmpresas} from "../controllers/inventario.controller";

let router = Router();

// rutas inventario habitual

router.get("/inventario", getInventario, getEmpresas);

router.post("/inventario", createNewProduct );

router.delete("/inventario",)

router.put("/inventario", )


// rutas empresas

router.get("/Empresa_Suministradora", getEmpresas);




export default router;
