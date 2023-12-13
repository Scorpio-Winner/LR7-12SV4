import CompanyInfoModel from '../models/CompanyInfo.js';

export const getAllCompanyInfo = async (req, res) => {
  try {
    const companyInfo = await CompanyInfoModel.find().exec();
    res.json(companyInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to fetch company information',
    });
  }
};

export const getCompanyInfoById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const companyInfo = await CompanyInfoModel.findById(companyId).exec();

    if (!companyInfo) {
      return res.status(404).json({
        message: 'Company information not found',
      });
    }

    res.json(companyInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to fetch company information',
    });
  }
};

export const createCompanyInfo = async (req, res) => {
  try {
    const {
      name,
      location,
      establishedYear,
      industry,
      employees,
      revenue,
      website,
      description,
    } = req.body;

    const companyInfo = new CompanyInfoModel({
      name,
      location,
      establishedYear,
      industry,
      employees,
      revenue,
      website,
      description,
    });

    const createdCompanyInfo = await companyInfo.save();
    res.status(201).json(createdCompanyInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to create company information',
    });
  }
};

export const updateCompanyInfo = async (req, res) => {
  try {
    const companyId = req.params.id;
    const {
      name,
      location,
      establishedYear,
      industry,
      employees,
      revenue,
      website,
      description,
    } = req.body;

    const updatedCompanyInfo = await CompanyInfoModel.findByIdAndUpdate(
      companyId,
      {
        name,
        location,
        establishedYear,
        industry,
        employees,
        revenue,
        website,
        description,
      },
      { new: true }
    ).exec();

    if (!updatedCompanyInfo) {
      return res.status(404).json({
        message: 'Company information not found',
      });
    }

    res.json(updatedCompanyInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to update company information',
    });
  }
};

export const deleteCompanyInfo = async (req, res) => {
  try {
    const companyId = req.params.id;
    const deletedCompanyInfo = await CompanyInfoModel.findByIdAndDelete(companyId).exec();

    if (!deletedCompanyInfo) {
      return res.status(404).json({
        message: 'Company information not found',
      });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to delete company information',
    });
  }
};