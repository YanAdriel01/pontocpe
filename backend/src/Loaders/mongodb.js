const mongoose = require("mongoose");

/* async function startDB(){
    await mongoose.connect(
        process.env.MONGO_URI
    );

    console.log("Banco de dados inicializado sem problemas");
} */

const startDB = async () => {
    try {
        console.log('Conectando ao Servidor...');
        
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("Banco de dados inicializado sem problemas");
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1);
    }
};
module.exports = startDB;