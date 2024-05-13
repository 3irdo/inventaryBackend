// getInventario.routes.js

import { Router } from "express";
import { createNewProduct, getInventario, getEmpresas, getProductById, deleteProductById, getVisitas} from "../controllers/inventario.controller";

let router = Router();

// rutas inventario habitual

router.get("/inventario", getInventario, getEmpresas);

router.get("/inventario/:Pk_Id_Producto", 
getProductById)


router.post("/inventario", createNewProduct );

router.delete("/inventario/:Pk_Id_Producto", deleteProductById)

router.put("/inventario", )


// rutas empresas

router.get("/Empresa_Suministradora", getEmpresas);


// rutas visitas tecnicas ----------

router.get("/Visita_Tecnica", getVisitas);
export default router;
