const express = require("express");
const router = express.Router();
const { obtenerProductos, obtenerProductoId, guardaProducto, actualizaProducto, eliminaProducto } = require("../controllers/product.js");


// Devuelve todos los productos
router.get("/", obtenerProductos)

// Devuelve un producto por su id
router.get("/:id", obtenerProductoId)

// Recibe y guarda un nuevo producto
router.post("/", guardaProducto)

// Actualiza un producto por su id
router.put("/:id", actualizaProducto)

// Elimina un producto por su id
router.delete("/:id", eliminaProducto)


module.exports = router;