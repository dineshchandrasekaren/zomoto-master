import joi from 'joi';

export const validateSignup = (userdata) => {
    const schema = joi.object({
        fullName: joi.string().min(5).required(),
        email: joi.string().email(),
        password: joi.string().min(6),
        address: joi.array().items(joi.object({ detail: joi.string(), for: joi.string() })),
        phoneNumber: joi.number(),
    });

    return schema.validateAsync(userdata);
}

export const validateSignin = (userdata) => {
    const schema = joi.object({
        email: joi.string().email(),
        password: joi.string().min(6).required(),
    });

    return schema.validateAsync(userdata);
}