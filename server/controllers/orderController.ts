import { NextFunction, Request, Response } from 'express';
import Orders, { OrderIn } from '../models/orderModel';

export const getOrders = async (req: Request, res: Response) => {
  res.status(200).json(await Orders.find({}));
};

export const createOrder = async (req: Request, res: Response) => {
  console.log(req.body);
  const { name, email, phone, location, description, date }: OrderIn = req.body;

  const order = await new Orders({
    name,
    email,
    phone,
    location,
    description,
    date,
  }).save();

  res.status(201).json({
    status: 'success',
    order: order,
  });
};
