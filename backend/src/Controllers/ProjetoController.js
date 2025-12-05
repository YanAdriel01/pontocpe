const ProjetoModel = require("../Models/ProjetoModel");

class ProjetoControler{
    // create - POST
    async create(req, res){
        try {
            const projeto = await ProjetoModel.create(req.body);
            return res.status(200).json(projeto);
        } catch (error){
            res
                .status(500)
                .json({message: "Deu ruim aqui Post-projeto", error: error.message });
        }
    }

    // read - GET
    async read(req, res){
        try {
            const projeto = await ProjetoModel.find();
            return res.status(200).json(projeto);
        } catch (error){
            res
                .status(500)
                .json({message: "Deu ruim aqui Get-projeto", error: error.message });
        }
    }
    // updatde - PUT
    async update(req, res){
        try {
            const { id } = req.params;
            const projetoEncontrado = await ProjetoModel.findById(id);

            if (!projetoEncontrado)
                return res
                        .status(404)
                        .json({message: "Projeto não encontrado"});

            
            return res.status(200).json(projeto);
        } catch (error){
            res
                .status(500)
                .json({message: "Deu ruim aqui Put-projeto", error: error.message });
        }
    }
    // delete - DELETE
    async delete(req, res){
        try {
            const { id } = req.params
            const projetoEncontrado = await ProjetoModel.findById(id);

            if (!projetoEncontrado)
                return res
                        .status(404)
                        .json({message: "Projeto não encontrado" });

            await projetoEncontrado.deleteOne();

            return res.status(200).json({"message": "projeto deletado com sucesso!"});
        } catch (error){
            res
                .status(500)
                .json({message: "Deu ruim aqui Delete-projeto", error: error.message });
        }
    }
}

module.exports = new ProjetoControler ();