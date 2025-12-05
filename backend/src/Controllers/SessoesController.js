const { populate } = require("../Models/UsuarioModel");
const SessoesModel = require("./../Models/SessoesModel");

class SessoesController {
    //create - POST
    async create(req, res){
        try {
            const sessoes = await SessoesModel.create(req.body);
            return res.status(200).json(sessoes);
        } catch (error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui Post-sessoes", error: error.message });   
        }
    }
    //read - GET
    async read(req, res){
        try{
            const sessoes = await SessoesModel.find().populate('id_usuario', '-senha');
            return res.status(200).json(sessoes);
        } catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui Get-sessoes", error: error.message });
        }
    }
    //delete - DELETE
    async delete(req, res){
        try {
            const { id } = req.params
            const seesaoEncontrada = await SessoesModel.findById(id);

            if (!seesaoEncontrada)
                return res
                        .status(404)
                        .json({message: "Sessão não encontrada" });

            await seesaoEncontrada.deleteOne();
            return res.status(200).json({"message": "sessão deletada com sucesso!"})
        } catch (error){
            res
                .status(500)
                .json({message: "Deu ruim aqui Delete-sessoes", error: error.message });
        }
    }
}

module.exports = new SessoesController;
