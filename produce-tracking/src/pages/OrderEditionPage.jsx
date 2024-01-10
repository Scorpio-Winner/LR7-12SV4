import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import OrderForm from "../components/UI/OrderForm/OrderForm";
import Footer from "../components/Footer";

import classes from "../styles/OrderEditionPage.module.css";

const OrderEditionPage = ({ orders, orderStatuses, editHandler, companyInfo}) => {
    const params = useParams();
    const orderToEdit = orders.items.find(
        (order) => order.id === parseInt(params.id)
    );

    return (
        <div className={classes.orderEditionPage}>
            <Header />
            <main className={classes.main}>
                {/* Передача orderData и orderStatuses в OrderForm */}
                <OrderForm
                  orderData={orderToEdit}
                  orderStatuses={orderStatuses}
                  submitHandler={editHandler}
                  companyInfo={companyInfo}
                >
                    Edit
                </OrderForm>
            </main>
            <Footer />
        </div>
    );
};

export default OrderEditionPage;
