const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController");
const ProjetoControler = require("./Controllers/ProjetoController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const ProjetoValidator = require("./Validators/ProjetoValidator");

const rotas = Router();
 
//Usuarios
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas.delete('/usuarios/:id', UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id', UsuarioValidator.update, UsuarioController.update);

//Projetos
rotas.post('/projetos', ProjetoValidator.create, ProjetoControler.create)
rotas.get('/projetos', ProjetoControler.read)
rotas.put('/projetos/:id', ProjetoValidator.update, ProjetoControler.update)
rotas.delete('/projetos/:id', ProjetoValidator.destroy, ProjetoControler.delete)

//Sessoes
rotas.post('/sessoes', SessoesValidator.create, SessoesController.create);
rotas.get('/sessoes', SessoesController.read);
rotas.delete('/sessoes/:id', SessoesValidator.destroy, SessoesController.delete);









module.exports = rotas;