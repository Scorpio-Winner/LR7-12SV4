import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderForm from "../components/UI/OrderForm/OrderForm";

import classes from "../styles/OrderCreationPage.module.css";

const OrderCreationPage = ({ creationHandler, orderStatuses, companyInfo }) => {

    return (
        <div className={classes.orderCreationPage}>
            <Header />
            <main className={classes.main}>
                <OrderForm submitHandler={creationHandler} orderStatuses={orderStatuses} companyInfo={companyInfo}>Create</OrderForm>
            </main>
            <Footer />
        </div>
    );
};

export default OrderCreationPage;
