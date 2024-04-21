import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const Item = ({ item }) => {
  return (
    <>
      <Card className="mx-2 mt-2 mb-4" style={{ width: "18rem" }}>
        <Link to={`/item/${item.id}`}>
          <Card.Img className="img-fluid" variant="top" src={item.pictureUrl} />
        </Link>
        <Card.Body>
          <Card.Text>{item.category}</Card.Text>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>
            <b>${item.price}</b>
          </Card.Text>
          <Link to={`/item/${item.id}`}>
            <Button variant="primary">Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
