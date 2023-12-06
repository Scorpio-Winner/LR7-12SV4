import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Button, Box } from '@mui/material';

import classes from "../styles/Order.module.css";

const Order = ({ orderData, orderStatuses, detailsHandler, deleteHandler, readonly }) => {
    const router = useNavigate();

    return (
        <div className={classes.order}>
            <div>
              <Box sx={{ display: 'flex', gap: '7vw' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '20px' }}>
                  {orderData.id}
                </Typography>
                <Typography variant="body1" sx={{ width: '170px' }}>
                  {orderData.title}
                </Typography>
                <Typography variant="body1" sx={{ width: '150px' }}>
                  {orderData.status}
                </Typography>
              </Box>
            </div>
            <div>
                <Button
                    variant="outlined"
                    onClick={() => detailsHandler(orderData)}
                    sx={{ marginRight: '8px' }}
                >
                    Details
                </Button>
                {!readonly && <>
                <Button
                    variant="outlined"
                    onClick={() => router(`/orders/edit/${orderData.id}`)}
                    sx={{ marginRight: '8px' }}
                >
                    Edit
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => deleteHandler(orderData.id)}
                >
                    Delete
                </Button>
                </>}
            </div>
        </div>
    );
};

export default Order;