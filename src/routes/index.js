import { Router } from "express";
import productsRouters from "./products.routes.js"
import cartsRouters from "./carts.routes.js"

const router = Router();

router.use("/products", productsRouters); /// Ruta de los prodcutos
router.use("/carts", cartsRouters);  /// Ruta de los carritos

export default router;