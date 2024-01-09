const { CompanyInfo } = require('../models/models');

class CompanyInfoController {
  async getAllCompanies(req, res) {
    try {
      const companies = await CompanyInfo.findAll();
      return res.json(companies);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }
  }
}

module.exports = new CompanyInfoController();