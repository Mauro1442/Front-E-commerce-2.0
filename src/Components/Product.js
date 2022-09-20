import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const navigate = useNavigate();

  const { name, price, code, description, id } = props;
  return (
    <Col>
      <Card
        style={{ width: "18rem", textDecoration: "none", color: "black" }}
        as={Link}
        to={"/product/" + id}
      >
        <Card.Img variant="top" src={code} />
        <Card.Body>
          <Card.Title>${price}</Card.Title>
          <Card.Text>
            <p>{name}</p>
          </Card.Text>

          <Button type="submit" variant="dark" onClick={() => navigate("/buy")}>
            Order
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
