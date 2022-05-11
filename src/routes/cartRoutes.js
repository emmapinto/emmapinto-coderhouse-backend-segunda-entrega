const express = require("express")
const router = express.Router()
const { CreaCarrito, obtenerCarritoId, guardaProductosId,  eliminaProductoId, eliminaCarrito } = require("../controllers/cart.js");


// Crea un carrito y devuelve su id
router.post("/", CreaCarrito)

// Muestra los productos de un carrito por id
router.get("/:id/productos", obtenerCarritoId)

// Incorpora productos por su id
router.post("/:id/productos", guardaProductosId)

// Elimina un producto por id de carrito y producto
router.delete("/:id/productos/:idProd", eliminaProductoId)

// Vacía un carrito y lo elimina
router.delete("/:id", eliminaCarrito)


module.exports = router;