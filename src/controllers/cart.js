const { products, carts } = require("../containers/index")


exports.CreaCarrito = async (req, res) => {
    let idProduct = req.body.product
    let newProduct = await products.getById(idProduct)
    
    let newCart = {
        products: []
    }
    const addCart = await carts.saveCart(newCart, newProduct)
    res.json(addCart)
}

exports.obtenerCarritoId = async (req, res) => {
    const id = req.params.id
    const products = await carts.cartById(id)
    res.json(products)
}

exports.guardaProductosId = async (req, res) => {
    const id = req.params.id
    const product = req.body.product
    const newProduct = await products.getById(product)
    const addProduct = await carts.addProduct(id, newProduct)
    res.json(addProduct)
}

exports.eliminaProductoId = async (req, res) => {
    const id = req.params.id;
    const idProd = req.params.idProd;
    const removeProduct = await carts.removeProduct(id, idProd)
    res.json(removeProduct)
}

exports.eliminaCarrito = (req, res) => {
    const cartId = req.params.id
    const cartRemoved = carts.removeCart(cartId)
    res.json(cartRemoved)
}