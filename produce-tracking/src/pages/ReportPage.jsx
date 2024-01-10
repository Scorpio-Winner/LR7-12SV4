import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import OrderList from '../components/OrderList';
import Footer from '../components/Footer';
import Modal from '../components/UI/Modal/Modal';
import OrderDetails from '../components/OrderDetails';

const ReportPage = ({ orders, orderStatuses, deleteOrder, companyInfo }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalOrder, setModalOrder] = useState(null);

  const filteredOrders = {
    items: orders.items.filter(
      (order) =>
        order.creation_date.startsWith('2023') && order.status === 'Complete'
    ),
  };

  const showOrderDetails = (filteredOrders) => {
    setModalOrder(filteredOrders);
    setModalActive(true);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Modal visible={modalActive} setVisible={setModalActive}>
        <OrderDetails
          order={modalOrder}
          orderStatuses={orderStatuses}
          companyInfo={companyInfo}
        />
      </Modal>
      <Header />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: '1 1',
          padding: '0px 70px',
          backgroundColor: '#d6d2e3',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: '16px', marginTop: '16px' }}>
        Completed Orders in 2023
        </Typography>
        <OrderList
          orders={filteredOrders}
          orderStatuses={orderStatuses}
          detailsHandler={showOrderDetails}
          deleteHandler={deleteOrder}
          readonly={true}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default ReportPage;