import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { removeFromCart, updateQuantity } from "../store/slice/cartReducer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import styles from "./styles.module.css";
import productImg04 from "../assets/images/about Us.png";
import trash3 from "../assets/images/trash3.svg";

const Cart = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const direction = currentLang === "ar" ? "rtl" : "ltr";

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleRemove = (id) => {
    const item = cartItems.find((item) => item.id === id);
    dispatch(removeFromCart(id));
    toast.error(`${item.name} تم الحذف!`);
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  return (
    <div style={{ direction }}>
      {/* Hero Section with Animation */}
      <motion.div
        className={`${styles.project__card}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={productImg04}
          alt="Project"
          className={`${styles.project__image}`}
        />
        <div className={styles.project__card__body}>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            What you need!
          </motion.h2>
        </div>
      </motion.div>

      {/* Table Section */}
      <section>
        <Container>
          <Row>
            <Col lg={9} md={8} xs={12}>
              {cartItems.length === 0 ? (
                <motion.h1
                  className="text-center fw-bold m-5 p-5 bg-light"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  No items added to the cart
                </motion.h1>
              ) : (
                <motion.div
                  className="table-responsive my-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <table className="table">
                    <thead>
                      <tr className="text-center">
                        <motion.th
                          scope="col"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          #
                        </motion.th>
                        <motion.th
                          scope="col"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Image
                        </motion.th>
                        <motion.th
                          scope="col"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          Title
                        </motion.th>
                        <motion.th
                          scope="col"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          Price
                        </motion.th>
                        <motion.th
                          scope="col"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          Qty
                        </motion.th>
                        <motion.th
                          scope="col"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          Delete
                        </motion.th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <motion.tr
                          className="text-center"
                          key={item.id}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <th scope="row">{index + 1}</th>
                          <td>
                            <img
                              src={item.image}
                              alt={item.name}
                              className={`${styles.table__image}`}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>${item.price}</td>
                          <td>
                            <input
                              type="number"
                              value={item.quantity}
                              min="1"
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <motion.span
                              className="fs-4"
                              onClick={() => handleRemove(item.id)}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <img src={trash3} alt="Remove" />
                            </motion.span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </Col>
            {/* Total Section */}
            <Col lg={3} md={4} xs={12} className="total__sub mt-4 mt-md-0">
              <motion.div
                className="p-3 rounded bg-light my-5"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h6 className="fs-5 fw-bold fs-3">Sub Total</h6>
                <span className="text-success fw-bold fs-3">
                  ${totalAmount.toFixed(2)}
                </span>
                <p className="mt-2">
                  Taxes and shipping will be calculated at checkout.
                </p>
                <div className="mt-4 d-flex flex-column">
                  <Link to="/shop" className="mb-2">
                    <motion.button
                      type="button"
                      className="btn btn-dark w-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      Continue Shopping
                    </motion.button>
                  </Link>
                  <Link to="/chaekout">
                    <motion.button
                      type="button"
                      className="btn btn-success w-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      Checkout
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Cart;
