import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import "./Card.css";


export default function Product(props) {
  const context = useContext(AuthContext)


  const { name, price, code, id } = props;
  return (
    <Col>
      <Card
        style={{ className: "card", width: "18rem", textDecoration: "none", color: "black", marginTop: "20px" }}
        as={Link}
        to={"/product/" + id}
      ><div style={{
        width: "100%", height: "auto", display: "inline-flex"
      }}>
        <Card.Img variant="top" src={code} style={{display: "-ms-flexbox"}} /></div>
        <Card.Body style={{marginLeft: "20px"}}>
          <Card.Title>${price}</Card.Title>
          <Card.Text>
            <p>{name}</p>
          </Card.Text>
          {context.userLogin &&

          <Button variant="dark"
          style={{  textDecoration: "none", color: "white" }}
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
