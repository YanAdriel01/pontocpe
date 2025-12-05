const UsuarioModel = require("../Models/UsuarioModel");

class UsuarioController {

    //create - POST
    async create(req, res){
        try{
            const usuario = await UsuarioModel.create(req.body);

            const { senha, ...novoUsuario } = usuario.toObject();

            res.status(200).json(novoUsuario);

        } catch (error){
            res
                .status(500)
                .json({message: "Deu ruim aqui Post-usuario", error: error.message });
        }
    }
    //read - GET
    async read(req, res){
        try {
            const usuario = await UsuarioModel.find();

            return res.status(200).json(usuario);
        } catch (error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui Get-usuario", error: error.message });
        }
    }
    //update - PUT
    async update(req, res){
        try{
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);

            if (!usuarioEncontrado)
                return res
                        .status(404)
                        .json({message: "Usuário não encontrado" });

            const usuario = await usuarioEncontrado.set(req.body).save();
            const { senha, ...novoUsuario } = usuario.toObject();

            return res.status(200).json({message: "Usuário alterado com sucesso", usuario: novoUsuario});

        } catch(error){
            res
                .status(500)
                .json({message: "Deu ruim aqui Put-usuario", error: error.message });
        }
    }
    //delete - DELETE
    async delete(req, res){
        try {
            const { id } = req.params
            const usuarioEncontrado = await UsuarioModel.findById(id);

            if (!usuarioEncontrado)
                return res
                        .status(404)
                        .json({message: "Usuário não encontrado" });

            await usuarioEncontrado.deleteOne();

            return res.status(200).json({"message": "usuário deletado com sucesso!"});
            
        } catch (error) {
            res
                .status(500)
                .json({message: "Deu ruim aqui Delete-usuario", error: error.message });   
        }    
    }
}

module.exports = new UsuarioController();