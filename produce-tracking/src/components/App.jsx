import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OrdersPage from "../pages/OrdersPage";
import OrderCreationPage from "../pages/OrderCreationPage";
import OrderEditionPage from "../pages/OrderEditionPage";
import ReportPage from "../pages/ReportPage";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatuses, setOrderStatuses] = useState([]);
  const [companyInfo, setCompanyInfo] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    loadOrders();
    loadOrderStatuses();
    loadCompanyInfo();
  }, []);

  const loadOrders = async () => {
    const response = await fetch("./orders.json");
    const data = await response.json();

    setOrders(data.orders);
  };

  const loadOrderStatuses = async () => {
    const response = await fetch("./orderStatuses.json");
    const data = await response.json();

    setOrderStatuses(data.orderStatuses);
  };

  const loadCompanyInfo = async () => {
    const response = await fetch("./companyInfo.json");
    const data = await response.json();

    setCompanyInfo(data.companyInfo);
  };

  const createOrder = (orderData) => {
    var maxId;

    if (orders && orders.length > 0) {
      maxId = Math.max(...orders.map((order) => order.id));
    } else {
      maxId = 0;
    }

    const order = {
      id: maxId + 1,
      ...orderData,
      creationDate: new Date().toISOString().split("T")[0],
    };

    setOrders([...orders, order]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const editOrder = (editedOrder) => {
    const index = orders.findIndex((order) => order.id === editedOrder.id);
    orders[index] = editedOrder;
  };

  return (
    <Routes>
      <Route
        path="/orders/create"
        element={<OrderCreationPage creationHandler={createOrder} orderStatuses={orderStatuses} companyInfo={companyInfo}/>}
      />
      <Route
        path="/orders/edit/:id"
        element={
          <OrderEditionPage
            orders={orders}
            orderStatuses={orderStatuses}
            companyInfo={companyInfo}
            editHandler={editOrder}
          />
        }
      />
      <Route
        path="/orders"
        element={
          <OrdersPage
            orders={orders}
            orderStatuses={orderStatuses}
            companyInfo={companyInfo}
            deleteOrder={deleteOrder}
          />
        }
      />
      <Route
        path="/report"
        element={
          <ReportPage
            orders={orders}
            orderStatuses={orderStatuses}
            companyInfo={companyInfo}
            deleteOrder={deleteOrder}
          />
        }
      />
      <Route path="*" element={<Navigate to="/orders" replace />} />
    </Routes>
  );
};

export default App;