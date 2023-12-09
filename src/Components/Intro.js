import {Row,Button} from "react-bootstrap";

const Intro = () => {
  return (
    <div className="d-flex align-items-center h-75 justify-content-center">
      <Row>
        <div className="title">Shooper</div>
        <div className="title-2">
          "Walk in Style Your Ultimate Destination for Trendsetting Footwear!"
        </div>
        <div className="introButton mt-4 text-center">
        <Button href="#Shoes" variant="dark" size="lg">See Catalog</Button>
        </div>
      </Row>
    </div>
  );
};

export default Intro;
