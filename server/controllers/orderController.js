const { Order } = require('../models/models');

class OrderController {
  async getAllOrders(req, res) {
    try {
      const orders = await Order.findAll();
      return res.json(orders);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }
  }

  async createOrder(req, res) {
    const order = { ...req.body };
  
    try {
      const createdOrder = await Order.create(order);
      return res.status(201).json({ createdOrder });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }
  }

  async updateOrder(req, res) {
    const { id } = req.params;
    const updatedOrder = { ...req.body };
  
    try {
      const order = await Order.findByPk(id);
  
      if (!order) {
        return res.status(404).json({ error: 'Заказ не найден' });
      }
  
      await Order.update(updatedOrder, {
        where: { id: id }
      });
  
      return res.json({ message: 'Заказ успешно обновлен' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }
  }

  async deleteOrder(req, res) {
    const { id } = req.params;
  
    try {
      const order = await Order.findByPk(id);
  
      if (!order) {
        return res.status(404).json({ error: 'Заказ не найден' });
      }
  
      await Order.destroy({
        where: { id: id }
      });
  
      return res.json({ message: 'Заказ успешно удален' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }
  }
}

module.exports = new OrderController();