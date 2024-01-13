import React from "react";
import Order from "./Order";
import jsPDF from "jspdf";
import Button from "@mui/material/Button";

import classes from "../styles/OrderList.module.css";

const OrderList = ({ orders, orderStatuses, detailsHandler, deleteHandler, readonly}) => {
    if (orders.items.length === 0) {
        return <h3 className={classes.emptyList}>No orders found</h3>;
    }

    const createPDF = () => {
        const doc = new jsPDF();
        orders.items.forEach((order, index) => {
            if (index !== 0) {
                doc.addPage();
            }
            doc.text(`Order ID: ${order.id}`, 10, 10);
            doc.text(`Order Title: ${order.title}`, 10, 20);
            doc.text(`Order Status: ${order.status}`, 10, 30);
            doc.text(`Order Creation Date: ${order.creation_date}`, 10, 40);
            doc.text(`Order Customer: ${order.customer}`, 10, 50);
            doc.text(`Order Complete Time: ${order.complete_time}`, 10, 60);
            doc.text(`Order Description: ${order.description}`, 10, 70);
        });
        doc.save("orders.pdf");
    };

    return (
        <div className={classes.orderList}>
            {orders.items.map((order) => (
                <Order
                    key={order.id}
                    orderData={order}
                    orderStatuses={orderStatuses}
                    detailsHandler={detailsHandler}
                    deleteHandler={deleteHandler}
                    readonly={readonly}
                />
            ))}

            {orders.items.length > 0 && (
                <Button variant="contained" onClick={createPDF}>
                    Create PDF
                </Button>
            )}
        </div>
    );
};

export default OrderList;
