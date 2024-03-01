import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    // console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-4">
      <h1>Products</h1>

      <div className="container">
        <div className="row justify-content-center gap-5">
          {products.map((product, index) => (
            <Card
              style={{ width: "18rem" }}
              key={index}
              className="main-card bg-dark rounded text-light p-2 col-lg-4 col-md-6 col-12"
            >
              <Card.Img
                variant="top"
                src={`${product.thumbnail}`}
                width={12}
                height={120}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Title>{product.price}</Card.Title>
                <Button variant="outline-primary">Show Details</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
