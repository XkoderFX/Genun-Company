"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.getOrders = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield orderModel_1.default.find({}));
});
exports.getOrders = getOrders;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { name, email, phone, location, description, date } = req.body;
    const order = yield new orderModel_1.default({
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
});
exports.createOrder = createOrder;
