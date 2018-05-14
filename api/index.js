const route = require('express').Router()

route.use('/courses', require('./courses'))
route.use('/students', require('./students'))
route.use('/subjects', require('./subjects'))
route.use('/teachers', require('./teachers'))
route.use('/admin/batches', require('./batches'))

module.exports = {
    route
}