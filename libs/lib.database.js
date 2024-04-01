const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://0.0.0.0:27017/api-belajar-express'

const configDB = {
    useNewUrlParser: true
}

const MongoDBConnection = () => {
    mongoose
        .connect(MONGO_URI, configDB)
        .then(() => {
            console.log('Berhasil terhubung ke databse MongoDB')
        })
        .catch(() => {
            console.log('Gagal terkonkesi databse MongoDB');
            console.error(error)
        })
}

module.exports = {
    MongoDBConnection
}