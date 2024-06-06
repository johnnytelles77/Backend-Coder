import { Router } from "express";
import productsRouters from "./products.routes.js"
import cartsRouters from "./carts.routes.js"
import sessionRouters from "./session.routes.js"
import { isLogin } from "../middlewares/isLogin.middleware.js";

const router = Router();

router.use("/products", isLogin, productsRouters); /// Ruta de los productos solo si estas logueado
router.use("/carts", cartsRouters);  /// Ruta de los carritos
router.use("/session", sessionRouters);  /// Ruta de los carritos


export default router;