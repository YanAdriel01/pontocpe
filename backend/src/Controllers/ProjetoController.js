const ProjetoModel = require("../Models/ProjetoModel");

class ProjetoControler{

    // create - POST

    async create(req, res){
        const projeto = await ProjetoModel.create(req.body);

        return res.status(200).json(projeto);

    }

    // read - GET

    async read(req, res){
        const projeto = await ProjetoModel.find();

        return res.status(200).json(projeto);

    }

    // updatde - PUT

    // delete - DELETE

    async delete(req, res){
        const { id } = req.params
        
        await ProjetoModel.findByIdAndDelete(id);

        return res.status(200).json({"message": "projeto deletado com sucesso!"})

    }


}

module.exports = new ProjetoControler ();