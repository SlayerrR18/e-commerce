import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { dataSendal } from "../Data/dataSendal.js";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const formatPriceToRupiah = (price) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formatter.format(price);
};

const Produkdetailsendal = () => {
  
  const navigate = useNavigate();
  const truncateDescription = (description, wordCount) => {
    const words = description.split(" ");
    const truncatedDescription = words.slice(0, wordCount).join(" ");
    return truncatedDescription;
  };
  const { id } = useParams();
  // Konversi ID menjadi integer dengan radix 10
  const selectedProduct = dataSendal.find(
    (item) => item.id === parseInt(id, 10)
  );

  // Cek apakah produk ditemukan
  if (!selectedProduct) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <Container style={{ marginLeft: "140px", marginRight: "40px" }}>
      <br />
      <h1 className="awal-sepatu" id="Shoes">
        Sandals
      </h1>
      <br />
      <Row>
        <Col className="jenisSepatu mt-5" key={selectedProduct.id}>
          <Card style={{ width: "60rem", height: "55rem" }}>
            <Card.Img
              variant="top"
              src={selectedProduct.image}
              style={{
                height: "30rem",
                width: "30rem",
                alignSelf: "center",
                marginTop: "10px",
              }}
            />
            <Card.Body>
              <Card.Title>{selectedProduct.name}</Card.Title>
              <Card.Text>{selectedProduct.description}</Card.Text>
              {/* Memanggil fungsi formatPriceToRupiah untuk menampilkan harga */}
              <Card.Text>
                {formatPriceToRupiah(selectedProduct.price)}
              </Card.Text>
              <Button variant="primary" onClick={() =>
                  navigate(`/produk-detail-sendal/${id}/paymentsendal`)}>Chekout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Produkdetailsendal;
