import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Checkout from "../components/Checkout/Checkout";
import Order from "../components/Order/Order";
import OrderDetail from "../components/Order/OrderDetail";
import Cart from "../components/Cart/Cart";
import PaymentSuccess from "../components/Payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
        <Route path="/payment/orderId" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRouters;
