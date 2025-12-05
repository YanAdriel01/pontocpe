const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        nome:   z.string({ required_error: "O nome é obrigatório" }),
        cor:    z.string({ required_error: "A cor é obrigatória"})
                .regex(/^#[0-9A-Fa-f]{6}$/, "Cor inválida, deve ser hexadecimal"),
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
        cor:    z.string({ required_error: "A cor é obrigatória"})
                .regex(/^#[0-9A-Fa-f]{6}$/, "Cor inválida, deve ser hexadecimal"),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido!"),
    })
});

module.exports = {
    create,
    destroy,
    update
}