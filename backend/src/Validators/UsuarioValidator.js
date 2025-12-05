const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");


// "nome": "Fulano Oliveira da Silva",
// "email": "teste32@cpejr.com.br",
// "senha": "cpe12345@",
// "cargo": "trainee 4",
// "status": "testando",


const create = validateRequest({
    body: z.object({
        nome: z.string({ required_error: "O nome é obrigatório" }),
        email: z.email({ required_error: "O email é obrigatório", message: "Email inválido" }),
        senha: z.string({ required_error: "A senha é obrigatória" }),
        cargo: z.string({ required_error: "O cargo é obrigatório" }),
        status: z.string().optional(),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido!"),
    }),
});

const update = validateRequest({
    body: z.object({
        nome: z.string().optional(),
        email: z.email().optional(),
        senha: z.string().optional(),
        cargo: z.string().optional(),
        status: z.string().optional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido!"),
    })
});

module.exports = {
	create,
    destroy,
    update,
};