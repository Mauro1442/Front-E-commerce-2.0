import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";



export default function Product(props) {
  const navigate = useNavigate();
  const context = useContext(AuthContext)


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
          {context.userLogin &&

          <Button 
          style={{  textDecoration: "none", color: "black" }}
        as={Link}
        to={"/modify/"+id}>
            Modify
          </Button>
          }
        </Card.Body>
      </Card>
    </Col>
  );
}
