const mongoose = require('mongoose');
const { DB_URL } = require('../env');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(DB_URL)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error',error);
    }
}

module.exports = {db}
// HPhD0bkYOFSlnfuH
// poojanmishra77528