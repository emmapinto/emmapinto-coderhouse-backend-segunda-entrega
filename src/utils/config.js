/********** Conexión Mongo Atlas *********/

const config = {
    mongodb: {
        url: 'mongodb+srv://moncholoco:moncholoco@cluster0.jj0on.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    }
}

/********** Conexión LOCAL *********/

// const config = {
//     mongodb: {
//         url: 'mongodb://localhost:27017/ecommerce'
//     }
// }


module.exports = config;

