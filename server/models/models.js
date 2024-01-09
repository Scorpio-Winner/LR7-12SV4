const sequelize = require('.');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },

},
{timestamps: false});

const CompanyInfo = sequelize.define('companyinfo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  established_year: { type: DataTypes.INTEGER, allowNull: false },
  industry: { type: DataTypes.STRING, allowNull: false },
  employees: { type: DataTypes.INTEGER, allowNull: false },
  revenue: { type: DataTypes.STRING, allowNull: false },
  website: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING(1000), allowNull: false },
},
{timestamps: false});

const OrderStatus = sequelize.define('orderstatus', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
},
{timestamps: false});

const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  creation_date: { type: DataTypes.STRING, allowNull: true },
  description: { type: DataTypes.STRING, allowNull: true }, 
  customer: { type: DataTypes.STRING, allowNull: false }, 
  complete_time: { type: DataTypes.STRING, allowNull: false },
},
{ timestamps: false });

const Admin = sequelize.define('admin', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
},{timestamps: false});

module.exports = {
  User,
  CompanyInfo,
  OrderStatus,
  Order,
  Admin,
};