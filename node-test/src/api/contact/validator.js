import Joi from '@hapi/joi';

const contactSchema = {
    name: Joi.string().required(),
    mobileNumber: Joi.string().regex(/\+?(88)?0?1[3456789][0-9]{8}\b/).required()
}
const byMobileNumber = {
    params: Joi.object({
        mobileNumber: Joi.string().regex(/\+?(88)?0?1[3456789][0-9]{8}\b/).required()
    })
}
const create = {
    payload: Joi.object(contactSchema)
}

const update = {
    payload: Joi.object(contactSchema),
    params: Joi.object({
        id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    })
}

const destroy = {
    params: Joi.object({
        id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    })
}

export default {
    byMobileNumber,
    create,
    update,
    destroy
}

