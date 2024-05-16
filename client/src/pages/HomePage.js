import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent, CardActions, Paper, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AboutUsSection from './AboutUs';
import FAQSection from './Faq';
import { motion } from 'framer-motion';
import './AboutUs.css';
import './Faq.css';
import './HomePage.css';

const DishCard = ({ dish, navigate }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, borderRadius: '16px', border: '1px solid #eee', bgcolor: 'background.paper' }}>
      <CardMedia
        component="img"
        height="140"
        image={dish.image}
        alt={dish.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dish.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dish.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="secondary" onClick={() => navigate('/order')}>
          Order Now
        </Button>
      </CardActions>
    </Card>
  </motion.div>
);

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dishes = [
    { title: "Paneer Tikka Masala", description: "Spiced paneer in tomato gravy", image: "paneer-tikka.jpg" },
    { title: "Daal Makhani", description: "Creamy black lentils", image: "/daal-makhni-edited.jpg" },
    { title: "Chole", description: "Chickpeas in a spicy sauce", image: "/chole-edited.jpg" },
    { title: "Navratna Korma", description: "Mix Veggies in a cashew based curry", image: "/korma-edited.jpg" },
    { title: "Bhaji", description: "Mumbai style Bhaji", image: "bhaji-edited.jpg" },
    { title: "Veg. Biryani", description: "Flavored rice with mixed vegetables", image: "/veg-biryani.jpg" },
    { title: "Veg. Kohlapuri", description: "Spicy vegetable curry", image: "/veg-kohlapuri.jpg" },
    { title: "Paneer Methi Malai", description: "Fenugreek leaves and paneer in creamy gravy", image: "/paneer-methi.jpg" },
  ];

  return (
    <>
      <Paper className="hero-section" elevation={0}>
        <Container maxWidth="md">
          <Typography variant="h2" className="text-primary" gutterBottom component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Quick But Healthy!
          </Typography>
          {/* <Typography variant="h5" className="hero-subtitle text-secondary" component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            Delicious and nutritious meals for busy lifestyles.
          </Typography> */}
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }}>
            <Button variant="contained" color="primary" className="hero-button" onClick={() => navigate('/menu')}>
              Explore Our Menu
            </Button>
          </motion.div>
        </Container>
      </Paper>

      <Container sx={{ py: 8 }} maxWidth="lg" className="featured-dishes">
        <Typography variant="h4" gutterBottom className="section-title text-primary">
          Featured Dishes
        </Typography>
        <Grid container spacing={4}>
          {dishes.map((dish, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <DishCard dish={dish} navigate={navigate} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <FAQSection />
      <AboutUsSection />
    </>
  );
};

export default HomePage;




// { title: "Paneer Tikka Masala", description: "Spiced paneer in tomato gravy", image: "paneer-tikka.jpg" },
// { title: "Daal Makhani", description: "Creamy black lentils", image: "/daal-makhni-edited.jpg" },
// { title: "Chole", description: "Chickpeas in a spicy sauce", image: "/chole-edited.jpg" },
// { title: "Navratna Korma", description: "Mix Veggies in a cashew based curry", image: "/korma-edited.jpg" },
// { title: "Bhaji", description: "Mumbai style Bhaji", image: "bhaji-edited.jpg" },
// { title: "Veg. Biryani", description: "Flavored rice with mixed vegetables", image: "/veg-biryani.jpg" },
// { title: "Veg. Kohlapuri", description: "Spicy vegetable curry", image: "/veg-kohlapuri.jpg" },
// { title: "Paneer Methi Malai", description: "Fenugreek leaves and paneer in creamy gravy", image: "/paneer-methi.jpg" },