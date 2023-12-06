import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const OrderDetails = ({ order, orderStatuses, companyInfo }) => {
  const [customerInfoOpen, setCustomerInfoOpen] = useState(false);

  const toggleCustomerInfo = () => {
    setCustomerInfoOpen(!customerInfoOpen);
  };

  // Find the corresponding customer information from companyInfo array
  const customer = companyInfo.find((company) => company.name === order.customer);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Typography variant="h2" sx={{ alignSelf: 'center', fontSize: '26px' }}>
        {order.title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
          <b>Id:</b> {order.id}
        </Typography>
        <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
          <b>Status:</b> {order.status}
        </Typography>
        <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
          <b>Creation date:</b> {order.creationDate}
        </Typography>
        <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
          <b>Complete time:</b> {order.completeTime}
        </Typography>
        <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
          <b>Description:</b><br />
          {order.description}
        </Typography>
        <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
          <b>Customer:</b> {order.customer}
        </Typography>
        <Button variant="outlined" onClick={toggleCustomerInfo}>
          {customerInfoOpen ? "Hide Customer Details" : "Show Customer Details"}
        </Button>
        {customerInfoOpen && customer && (
          <Box>
            <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
              <b>Location:</b> {customer.location}
            </Typography>
            <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
              <b>Established Year:</b> {customer.establishedYear}
            </Typography>
            <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
              <b>Industry:</b> {customer.industry}
            </Typography>
            <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
              <b>Employees:</b> {customer.employees}
            </Typography>
            <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
              <b>Revenue:</b> {customer.revenue}
            </Typography>
            <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
              <b>Website:</b> {customer.website}
            </Typography>
            <Typography variant="body1" sx={{ width: '450px', fontSize: '18px' }}>
              <b>Description:</b> {customer.description}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OrderDetails;