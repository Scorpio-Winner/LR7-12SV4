import React from "react";
import Order from "./Order";

import classes from "../styles/OrderList.module.css";

const OrderList = ({ orders, orderStatuses, detailsHandler, deleteHandler, readonly}) => {
    if (orders.length === 0) {
        return <h3 className={classes.emptyList}>No orders found</h3>;
    }

    return (
        <div className={classes.orderList}>
            {orders.map((order) => (
                <Order
                    key={order.id}
                    orderData={order}
                    orderStatuses={orderStatuses}
                    detailsHandler={detailsHandler}
                    deleteHandler={deleteHandler}
                    readonly={readonly}
                />
            ))}
        </div>
    );
};

export default OrderList;
