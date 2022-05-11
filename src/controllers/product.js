const { products } = require("../containers/index")


exports.obtenerProductos = async (req, res) => {
    const data = await products.getAll()
    res.send(data)
}

exports.obtenerProductoId = async (req, res) => {
    const id = req.params.id;
    const data = await products.getById(id)
    res.send(data)
}

exports.guardaProducto = async (req, res) => {
    
    let product = req.body

    const newProduct = await products.save(product)
    res.send(newProduct)
}

exports.actualizaProducto = async (req, res) => {
    const id = req.params.id;
    
    let product = req.body

    const update = await products.updateById(id, product)
    res.send(update)
}

exports.eliminaProducto = async (req, res) => {
    const id = req.params.id;
    const deleted = await products.deleteById(id)
    res.send(deleted)
}