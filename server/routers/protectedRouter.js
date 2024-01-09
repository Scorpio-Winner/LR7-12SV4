const { Router } = require("express");
const companyInfoController = require("../controllers/companyInfoController");
const orderStatusController = require("../controllers/orderStatusController");
const orderController = require("../controllers/orderController");


const router = new Router();

router.get("/companies-info", companyInfoController.getAllCompanies);
router.get("/order-statuses", orderStatusController.getAllOrderStatuses);

router.post("/create-order", orderController.createOrder);
router.get("/orders", orderController.getAllOrders);
router.put("/order/update/:id", orderController.updateOrder);

module.exports = router;