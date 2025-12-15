const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const login = validateRequest({
    body: z.object({
        email: z.email({ required_error: "O email é obrigatório", message: "Email inválido" }),
        senha: z.string({ required_error: "A senha é obrigatória" }),
    })
});


module.exports = {
    login
}