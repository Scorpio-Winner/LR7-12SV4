import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OrdersPage from "../pages/OrdersPage";
import OrderCreationPage from "../pages/OrderCreationPage";
import OrderEditionPage from "../pages/OrderEditionPage";
import ReportPage from "../pages/ReportPage";
import { publicRoutes } from "./router/publicRoutes";
import { LOGIN_ROUTE } from "./utils/consts";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, createOrder, deleteOrder, updateOrder } from "../redux/slices/order";
import { fetchOrderStatuses } from "../redux/slices/orderstatus";
import { fetchCompaniesInfo } from "../redux/slices/companyinfo";

const App = () => {
  const dispatch = useDispatch();
  const {orders} = useSelector((state) => state.orders);
  const {orderStatuses} = useSelector((state) => state.orderStatuses);
  const {companyInfos} = useSelector((state) => state.companyInfos);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchOrderStatuses());
    dispatch(fetchCompaniesInfo());
  }, [dispatch]);

  const handleCreateOrder = (orderData) => {
    const order = {
      ...orderData,
      creation_date: new Date().toISOString().split("T")[0],
    };
    dispatch(createOrder(order));
  };

  const handleDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
    window.location.reload();
  };

  const handleEditOrder = (editedOrder) => {
    dispatch(updateOrder({ orderId: editedOrder.id, updateData: editedOrder }));
  };

  if (!token) {
    return (
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        <Route key="*" path="*" element={<Navigate to={LOGIN_ROUTE} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/orders/create"
        element={
          <OrderCreationPage
            creationHandler={handleCreateOrder}
            orderStatuses={orderStatuses}
            companyInfo={companyInfos}
          />
        }
      />
      <Route
        path="/orders/edit/:id"
        element={
          <OrderEditionPage
            orders={orders}
            orderStatuses={orderStatuses}
            companyInfo={companyInfos}
            editHandler={handleEditOrder}
          />
        }
      />
      <Route
        path="/orders"
        element={
          <OrdersPage
            orders={orders}
            orderStatuses={orderStatuses}
            companyInfo={companyInfos}
            deleteOrder={handleDeleteOrder}
          />
        }
      />
      <Route
        path="/report"
        element={
          <ReportPage
            orders={orders}
            orderStatuses={orderStatuses}
            companyInfo={companyInfos}
            deleteOrder={handleDeleteOrder}
          />
        }
      />
      <Route path="*" element={<Navigate to="/orders" replace />} />
    </Routes>
  );
};

export default App;