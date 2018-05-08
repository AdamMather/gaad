const express = require('express');
const router = express.Router();

const portalController = require('./portalController');

/**
 * GET /products
 * Example: /api/portal/products
 * Get all products
 */
router.get('/products', portalController.getProducts);

/**
 * GET /commission
 * Example: /api/portal/commission
 * Get the project commission by month forecast information
 */
router.get('/commission', portalController.getProjectCommissionByMonth);

module.exports = router;
