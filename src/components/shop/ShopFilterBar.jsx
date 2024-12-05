import React from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import styles from "./shop.module.css";
import searchshop from "../../assets/images/searchshop.svg";

const ShopFilterBar = ({ sortType, setSortType, searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.filterBar}>
      <Row>
        {/* فلتر الترتيب */}
        <Col lg={4} md={6} >
          <Dropdown className="w-100 mb-3">
            <Dropdown.Toggle variant="light" className="w-100">
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.menuItem}>
              <Dropdown.Item onClick={() => setSortType("price-asc")}  className={styles.dropItem}>
                Price (Low to High)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortType("price-desc")} className={styles.dropItem}>
                Price (High to Low)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* فلتر البحث */}
        <Col lg={8} md={6}>
          <div className="d-flex align-items-center">
            {/* حقل البحث */}
            <Form.Control
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={searchshop} alt="image" className={styles.galsess}/>z
              
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShopFilterBar;
