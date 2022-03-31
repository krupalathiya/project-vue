const dbconfig = require('../models')
const Product = db.products
const OP = db.Sequelize.OP
exports.create = (req, res) => {

}

exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'some error occurred'
        })
    })
}