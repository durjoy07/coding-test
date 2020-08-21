import controller from './controller.js';
import validator from './validator';

export default [
    {
        method: 'GET',
        path: '/contact/all',
        config: {
            tags: ['api'],
            description: 'Get all contacts',
            handler: controller.all,
        }
    },
    {
        method: 'GET',
        path: '/contact/by-mobile-number/{mobileNumber}',
        config: {
            tags: ['api'],
            description: 'Get a contact by mobile number',
            handler: controller.byMobileNumber,
            validate: validator.byMobileNumber,
        }
    },
    {
        method: 'POST',
        path: '/contact/create',
        config: {
            tags: ['api'],
            description: 'Add a new contact',
            handler: controller.create,
            validate: validator.create,
        }
    },
    {
        method: 'PUT',
        path: '/contact/update/{id}',
        config: {
            tags: ['api'],
            description: 'Update a contact',
            handler: controller.update,
            validate: validator.update,
        }
    },
    {
        method: 'DELETE',
        path: '/contact/delete/{id}',
        config: {
            tags: ['api'],
            description: 'Delete a contact',
            handler: controller.destroy,
            validate: validator.destroy,
        }
    }
] 
