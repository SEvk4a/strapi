'use strict';

/**
 * minifaq service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::minifaq.minifaq');
