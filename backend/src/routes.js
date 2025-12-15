const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController");
const ProjetoControler = require("./Controllers/ProjetoController");
const AuthController = require("./Controllers/AuthController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const ProjetoValidator = require("./Validators/ProjetoValidator");
const AuthValidator  = require("./Validators/AuthValidator");
const verificarJwt = require("./Middlewares/verificarJwt");

const rotas = Router();
 
//Usuarios
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', verificarJwt, UsuarioController.read);
rotas.delete('/usuarios/:id', verificarJwt, UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id', verificarJwt, UsuarioValidator.update, UsuarioController.update);

//Projetos
rotas.post('/projetos', verificarJwt, ProjetoValidator.create, ProjetoControler.create)
rotas.get('/projetos', verificarJwt,  ProjetoControler.read)
rotas.put('/projetos/:id', verificarJwt,  ProjetoValidator.update, ProjetoControler.update)
rotas.delete('/projetos/:id', verificarJwt, ProjetoValidator.destroy, ProjetoControler.delete)

//Sessoes
rotas.post('/sessoes', verificarJwt, SessoesValidator.create, SessoesController.create);
rotas.get('/sessoes', SessoesController.read);
rotas.delete('/sessoes/:id', verificarJwt, SessoesValidator.destroy, SessoesController.delete);

//Auth

rotas.post("/login", AuthValidator.login, AuthController.login);








module.exports = rotas;