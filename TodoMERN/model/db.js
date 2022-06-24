const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://127.0.0.1:27017/todolist', (err, res) => {
    if (err) throw err;
    console.log('Database connected.')
})