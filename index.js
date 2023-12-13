import express from "express";
/*import fs from "fs";
import multer from "multer";
import cors from "cors";*/
import mongoose from "mongoose";

/*import {
  registerValidation,
  loginValidation,
} from "./validations.js";*/

/*import { handleValidationErrors, checkAuth } from "./utils/index.js";
*/
import {
  CompanyInfoController,
  OrdersController,
  OrderStatusesController,
  UserController,
} from "./controllers/index.js";

mongoose
  .connect("mongodb+srv://admin:daniilscorpio857@cluster0.duigrhl.mongodb.net/ProduceTracking")
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

/*const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

/* User Routes
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.get("/auth/me", checkAuth, UserController.getMe); */

// Company Info Routes
app.get("/companyinfo", CompanyInfoController.getAllCompanyInfo);
app.get("/companyinfo/:id", CompanyInfoController.getCompanyInfoById);
app.post("/companyinfo", CompanyInfoController.createCompanyInfo);
app.put("/companyinfo/:id", CompanyInfoController.updateCompanyInfo);
app.delete("/companyinfo/:id", CompanyInfoController.deleteCompanyInfo);

// Order Routes
app.get("/orders", OrdersController.getAllOrders);
app.get("/orders/:id", OrdersController.getOrderById);
app.post("/orders", OrdersController.createOrder);
app.put("/orders/:id", OrdersController.updateOrder);
app.delete("/orders/:id", OrdersController.deleteOrder);

// Order Status Routes
app.get("/orderstatuses", OrderStatusesController.getAllOrderStatuses);
app.get("/orderstatuses/:id", OrderStatusesController.getOrderStatusById);
app.post("/orderstatuses", OrderStatusesController.createOrderStatus);
app.put("/orderstatuses/:id", OrderStatusesController.updateOrderStatus);
app.delete("/orderstatuses/:id", OrderStatusesController.deleteOrderStatus);
/*
app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});
*/
app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
}); 
