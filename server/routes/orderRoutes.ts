import { Router } from 'express';
import { getOrders, createOrder } from '../controllers/orderController';

const router = Router();

router.route('/').get(getOrders).post(createOrder);

export default router;
