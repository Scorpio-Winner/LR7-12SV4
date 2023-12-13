import OrderModel from '../models/Orders.js';

export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find().exec();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to fetch orders',
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await OrderModel.findById(orderId).exec();

    if (!order) {
      return res.status(404).json({
        message: 'Order not found',
      });
    }

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to fetch order',
    });
  }
};

export const createOrder = async (req, res) => {
  try {
    const {
      title,
      status,
      creationDate,
      description,
      customer,
      completeTime,
    } = req.body;

    const order = new OrderModel({
      title,
      status,
      creationDate,
      description,
      customer,
      completeTime,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to create order',
    });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const {
      title,
      status,
      creationDate,
      description,
      customer,
      completeTime,
    } = req.body;

    const updatedOrder = await OrderModel.findByIdAndUpdate(
      orderId,
      {
        title,
        status,
        creationDate,
        description,
        customer,
        completeTime,
      },
      { new: true }
    ).exec();

    if (!updatedOrder) {
      return res.status(404).json({
        message: 'Order not found',
      });
    }

    res.json(updatedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to update order',
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await OrderModel.findByIdAndDelete(orderId).exec();

    if (!deletedOrder) {
      return res.status(404).json({
        message: 'Order not found',
      });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to delete order',
    });
  }
};