import { Contact } from '../../models/contact';
import Boom from '@hapi/boom';

// Get all contacts 
const all = async (request, reply) => {
    try {
        const data = await Contact.find({});
        if (data.length) return reply.response(data).code(200);
        return reply.response({ msg: "Your Contact list is empty" }).code(200)
    }
    catch (error) {
        return Boom.badRequest(error);
    }
}

// Get contact by mobile number 
const byMobileNumber = async (request, reply) => {
    try {
        const mobile = "+880" + request.params.mobileNumber.slice(-10);
        const data = await Contact.findOne({ mobileNumber: mobile });
        if (data) return reply.response(data).code(200);
        return reply.response({ msg: "Sorry! No contact found" }).code(200)
    }
    catch (error) {
        return Boom.badRequest(error);
    }
}

// Create a new contact 
const create = async (request, reply) => {
    try {
        const contact = new Contact(request.payload);
        const data = await contact.save();
        return reply.response(data).code(201)
    }
    catch (error) {
        return Boom.badRequest(error);
    }
}

// Update a Contact
const update = async (request, reply) => {
    try {
        request.payload.mobileNumber = "+880" + request.payload.mobileNumber.slice(-10);
        await Contact.findByIdAndUpdate({
            _id: request.params.id
        }, {
            $set: request.payload
        }, { multi: true }
        );
        return reply.response().code(204);
    }
    catch (error) {
        return Boom.badRequest(error);
    }
};

// Delete A Contact
const destroy = async (request, reply) => {
    try {
        await Contact.findByIdAndDelete({ _id: request.params.id })
        return reply.response().code(202);
    }
    catch (error) {
        return Boom.badRequest(error);
    }
};

export default {
    all,
    byMobileNumber,
    create,
    update,
    destroy
}
