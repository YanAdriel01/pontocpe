const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://yanadriel:Hnd3ya97HuhIYT2P@pontocpe.xnhloac.mongodb.net/?retryWrites=true&w=majority&appName=PontoCPE')
}

module.exports = startDB;