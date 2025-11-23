const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {

    //create - POST
    async create(req, res){
        const usuario = await UsuarioModel.create(req.body);

        return res.status(200).json(usuario);
    }
    //read - GET
    async read(req, res){
        const usuario = await UsuarioModel.find();

        return res.status(200).json(usuario);

    }
    //update - PUT
    async update(req, res){
        const { id } = req.params;

        const usuario = await UsuarioModel.findByIdAndUpdate(id, req.body, {new: true});

        return res.status(200).json(usuario);
        

    }
    //delete - DELETE
    async delete(req, res){
        const { id } = req.params

        await UsuarioModel.findByIdAndDelete(id);

        return res.status(200).json({"message": "usuário deletado com sucesso!"})
    }

}

module.exports = new UsuarioController();