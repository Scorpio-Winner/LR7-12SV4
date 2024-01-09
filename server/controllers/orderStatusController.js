const { OrderStatus } = require('../models/models');

class OrderStatusController {
  async getAllOrderStatuses(req, res) {
    try {
      const orderstatuses = await OrderStatus.findAll();
      return res.json(orderstatuses);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }
  }
}

module.exports = new OrderStatusController();