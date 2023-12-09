import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { dataSepatu } from "../Data/dataSepatu.js";
import { useParams } from "react-router-dom";

const formatPriceToRupiah = (price) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formatter.format(price);
};

const Peymentsepatu = () => {
  const { id } = useParams();
  const selectedProduct = dataSepatu.find(
    (item) => item.id === parseInt(id, 10)
  );
  if (!selectedProduct) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <Container style={{ marginLeft: "140px", marginRight: "40px" }}>
      <br />
      <h1 className="awal-sepatu" id="Shoes">
        Shoes
      </h1>
      <br />
      <Row>
        <Col className="jenisSepatu mt-5" key={selectedProduct.id}>
          <Card style={{ width: "30rem", height: "41rem" }}>
            <Card.Img
              variant="top"
              src={selectedProduct.image}
              style={{
                height: "20rem",
                width: "20rem",
                alignSelf: "center",
                marginTop: "10px",
              }}
            />
            <Card.Body>
              <Card.Title>{selectedProduct.name}</Card.Title>
              <Card.Title>Stock : {selectedProduct.stock}</Card.Title>
              <Card.Text>Total : 1</Card.Text>
              <Card.Text>Total price</Card.Text>
              <Card.Text>
                {formatPriceToRupiah(selectedProduct.price)}
              </Card.Text>
              <Button variant="primary">Pay</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Peymentsepatu;
