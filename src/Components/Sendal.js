import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { dataSendal } from "../Data/dataSendal.js";
import { useNavigate } from "react-router-dom";


const Sendal = () => {
  const navigate = useNavigate();
  const truncateDescription = (description, wordCount) => {
    const words = description.split(" ");
    const truncatedDescription = words.slice(0, wordCount).join(" ");
    return truncatedDescription;
  };
  return (
    <div>
      <Container style={{ marginLeft: "140px", marginRight: "40px" }}>
        <br />
        <h1 className="awal-sendal" id="Sandals">
          Sandals
        </h1>
        <br />
        <Row>
          {dataSendal.map((item) => (
            <Col className="JenisSendal mt-5">
            <Card style={{ width: "20rem", height: "42rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateDescription(item.description || "", 15)}</Card.Text>
                <Button variant="primary"
                onClick={() => navigate(`/produk-detail-sendal/${item.id}`)}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Sendal;
