import OrderStatusModel from '../models/OrderStatuses.js';

export const getAllOrderStatuses = async (req, res) => {
  try {
    const orderStatuses = await OrderStatusModel.find().exec();
    res.json(orderStatuses);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to fetch order statuses',
    });
  }
};

export const getOrderStatusById = async (req, res) => {
  try {
    const orderStatusId = req.params.id;
    const orderStatus = await OrderStatusModel.findById(orderStatusId).exec();

    if (!orderStatus) {
      return res.status(404).json({
        message: 'Order status not found',
      });
    }

    res.json(orderStatus);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to fetch order status',
    });
  }
};

export const createOrderStatus = async (req, res) => {
  try {
    const { name } = req.body;

    const orderStatus = new OrderStatusModel({ name });

    const createdOrderStatus = await orderStatus.save();
    res.status(201).json(createdOrderStatus);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to create order status',
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const orderStatusId = req.params.id;
    const { name } = req.body;

    const updatedOrderStatus = await OrderStatusModel.findByIdAndUpdate(
      orderStatusId,
      { name },
      { new: true }
    ).exec();

    if (!updatedOrderStatus) {
      return res.status(404).json({
        message: 'Order status not found',
      });
    }

    res.json(updatedOrderStatus);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to update order status',
    });
  }
};

export const deleteOrderStatus = async (req, res) => {
  try {
    const orderStatusId = req.params.id;
    const deletedOrderStatus = await OrderStatusModel.findByIdAndDelete(orderStatusId).exec();

    if (!deletedOrderStatus) {
      return res.status(404).json({
        message: 'Order status not found',
      });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to delete order status',
    });
  }
};