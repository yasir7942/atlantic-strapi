'use strict';

/**
 * msds-register service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::msds-register.msds-register');
