"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const router = express_1.Router();
router.route('/').get(orderController_1.getOrders).post(orderController_1.createOrder);
exports.default = router;
