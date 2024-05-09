import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Import any additional components you might need

const MenuPage = () => {
  const categories = {
    starters: [{ title: "Paneer Tikka Masala", description: "Spiced paneer in tomato gravy", image: "path-to-image-1.jpg" },
    { title: "Daal Makhani", description: "Creamy black lentils", image: "/path-to-image-2.jpg" },
    { title: "Chana Masala", description: "Chickpeas in a spicy sauce", image: "/path-to-image-3.jpg" },
    { title: "Navratna Korma", description: "Mix Veggies in a cashew based curry", image: "/path-to-image-4.jpg" },
      
      // More dishes...
    ],
    mains: [
      { title: "Paneer Tikka Masala", description: "Spiced paneer in tomato gravy", image: "path-to-image-1.jpg" },
      { title: "Daal Makhani", description: "Creamy black lentils", image: "/path-to-image-2.jpg" },
      { title: "Chana Masala", description: "Chickpeas in a spicy sauce", image: "/path-to-image-3.jpg" },
      { title: "Navratna Korma", description: "Mix Veggies in a cashew based curry", image: "/path-to-image-4.jpg" },
    ],
    // More categories...
  };

  return (
    <Container>
      <h1 className="mt-4">Our Menu</h1>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <Row>
            {categories[category].map((dish, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={dish.image} />
                  <Card.Body>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Text>{dish.description}</Card.Text>
                    {/* Add more details like price, ingredients, etc */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default MenuPage;
