
const mongoose = require("mongoose")

module.exports = () =>{
    return mongoose.connect("mongodb+srv://sagarshiv:shiv@cluster0.y8rrc.mongodb.net/unacademy-clone?retryWrites=true&w=majority")
}
