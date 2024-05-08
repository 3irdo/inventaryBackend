import { Router } from "express";
import { createNewProduct, getInventario } from "../controllers/inventario.controller";

const router = Router();


router.get("/inventario", getInventario);

router.post("/inventario", createNewProduct );

router.get("/inventario",)

router.delete("/inventario",)

router.put("/inventario",)




export default router;
