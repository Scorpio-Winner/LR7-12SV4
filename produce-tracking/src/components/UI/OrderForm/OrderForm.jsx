import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import classes from "./OrderForm.module.css";

const OrderForm = ({ children, orderData, orderStatuses, companyInfo, submitHandler }) => {
  const [order, setOrder] = useState(
    orderData
      ? orderData
      : {
          title: "",
          status: "",
          description: "",
          customer: "",
          complete_time: "",
        }
  );

  const router = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    submitHandler(order);
    setOrder({
      title: "",
      status: "",
      description: "",
      customer: "",
      complete_time: "",
    });

    router("/orders");
    window.location.reload();
  };

  const routeToRouter = (e) => {
    e.preventDefault();
    router("/orders");
  };


  return (
    <form className={classes.form}>
      <h2 className={classes.formHeader}>{children} order</h2>
      <div className={classes.inputs}>
        <TextField
          label="Title"
          variant="outlined"
          value={order.title}
          onChange={(e) => setOrder({ ...order, title: e.target.value })}
        />
        <FormControl fullWidth>
        {/* Используем Select для отображения выпадающего списка статусов */}
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order.status}
          label="Status"
        onChange={(e) => setOrder({ ...order, status: e.target.value })}
      >
        {orderStatuses && orderStatuses.items.map((status) => (
          <MenuItem key={status.id} value={status.name}>
          {status.name}
          </MenuItem>
        
        ))}
      </Select>
      </FormControl>


      <FormControl fullWidth>
      {/* Используем Select для отображения выпадающего списка клиентов */}
      <InputLabel id="customer-select-label">Customer</InputLabel>
      <Select
        labelId="customer-select-label"
        id="customer-select"
        label="Customer"
        value={order.customer}
        onChange={(e) => setOrder({ ...order, customer: e.target.value })}
      >
        {companyInfo && companyInfo.items.map((customer) => (
          <MenuItem key={customer.id} value={customer.name}>
            {customer.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

        <TextField
          label="Complete time"
          variant="outlined"
          value={order.complete_time}
          onChange={(e) => setOrder({ ...order, complete_time: e.target.value })}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={order.description}
          onChange={(e) => setOrder({ ...order, description: e.target.value })}
          multiline
          rows={4}
        />
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Button variant="contained" onClick={submit} sx={{ width: '100%' }} disabled={!order.title || !order.status || !order.description || !order.customer || !order.complete_time}>{children}</Button>
        <Button variant="contained" onClick={routeToRouter} sx={{ width: '100%' }}>Cancel</Button>
      </Box>
    </form>
  );
};

export default OrderForm;
