import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";

export default function Product(props) {
  const { name, price, code, description, id } = props;
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <li>price: {price}</li>
            <li>code: {code}</li>
            <li>description: {description} </li>
            <li>id: {id}</li>
          </Card.Text>
          <Button variant="dark" as={Link} to={"/product/" + id}>
            See Detail
          </Button>
          <Button type="submit" variant="warning">
            Buy
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
