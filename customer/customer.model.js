const mongoose = require('mongoose')

const CustomerObject = {
    nomor: { type: String, unique: true },
    nama: { type: String },
    email: { type: String },
    nomorTelepon: { type: String },
    alamat: { type: String }
};

const CustomerSchema = new mongoose.Schema(CustomerObject);

const CustomerModel = new mongoose.model("Customer", CustomerSchema);

module.exports = {
    CustomerObject,
    CustomerSchema,
    CustomerModel
}