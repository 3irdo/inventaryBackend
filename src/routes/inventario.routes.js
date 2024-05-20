// inventario.routes.js

import { Router } from "express";
import {
  createNewProduct,
  getInventario,
  getEmpresas,
  getProductById,
  deleteProductById,
  updateProductById,
  createNewVisita,
  getVisitas,
  getVisitaById,
  deleteVisitaById,
  updateVisitaById,
  getClientes,
  getUsuarioTecnico,
  createNewUser,
  deleteUserById,
  updateUsuarioTecnicoById,
  getUsuarioTecnicoById,
} from "../controllers/inventario.controller";

let router = Router();

// rutas inventario habitual

router.get("/inventario", getInventario, getEmpresas);

router.get("/inventario/:Pk_Id_Producto", getProductById);

router.post("/inventario", createNewProduct);

router.delete("/inventario/:Pk_Id_Producto", deleteProductById);

router.put("/inventario/:Pk_Id_Producto", updateProductById);


// rutas visitas tecnicas ----------
router.get("/Visita_Tecnica", getVisitas);

router.get("/Visita_Tecnica/:Pk_Id_Visita_Tecnica", getUsuarioTecnicoById);

router.post("/Visita_Tecnica", createNewVisita);

router.delete("/Visita_Tecnica/:Pk_Id_Visita_Tecnica", deleteVisitaById);

router.put("/Visita_Tecnica/:Pk_Id_Visita_Tecnica", updateVisitaById);


// ------------ruta clientes--------
router.get("/Clientes", getClientes);


// -------------rutas usuario tecnico ------
router.get("/Usuario_Tecnico", getUsuarioTecnico)
router.get("/Usuario_Tecnico/:Pk_CC_Usuario", getUsuarioTecnicoById)
router.post("/Usuario_Tecnico", createNewUser)
router.delete("/Usuario_Tecnico/:Pk_CC_Usuario", deleteUserById)
router.put("/Usuario_Tecnico/:Pk_CC_Usuario", updateUsuarioTecnicoById)



// rutas empresas

router.get("/Empresa_Suministradora", getEmpresas);

export default router;
