import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button'; // Assuming this is a custom Button component
import { newsData } from '../../assets/data/NewsData'; // Importing newsData from data folder
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

const styles = {
  boxItems: {
    transition: '0.5s',
    marginBottom: '16px',
    width: '100%',
    maxWidth: '345px',
    borderRadius: '10px',
    overflow: 'hidden',
    '&:hover': {
      boxShadow: '10px 6px 12px rgba(0, 0, 0, 0.1)', // Shadow increased on hover
      cursor: 'pointer',
      transform: 'translateY(-5px)',
    },
  },
  img: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  h3: {
    fontWeight: '500',
  },
  p: {
    color: '#999',
    fontWeight: '400',
    margin: '20px 0',
    fontSize: '17px',
    lineHeight: '25px',
  },
  date: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    display: 'block',
    marginRight: '20px',
  },
};

function Card() {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: '16px' }}>
      <Grid container spacing={3} justifyContent="space-around">
        {newsData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Box
              sx={styles.boxItems}
              onClick={() => navigate(`/news/${item.id}`)}
              role="article" // Optional role for accessibility
              aria-label={`Read more about ${item.title}`} // Optional aria-label for accessibility
            >
              <img src={item.image} alt={item.title} style={styles.img} />
              <Typography variant="h3" sx={styles.h3}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={styles.p}>
                {item.content}
              </Typography>
              <Button
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/news/${item.id}`);
                }}
              >
                Saiba Mais
              </Button>
              <Box sx={styles.date}>
                <AiOutlineClockCircle className='icon' /> 
                <Typography component="label" sx={styles.label}>{item.date}</Typography>
                <AiOutlineComment className='icon' /> 
                <Typography component="label" sx={styles.label}></Typography>
                <AiOutlineShareAlt className='icon' /> 
                <Typography component="label" sx={styles.label}></Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Card;

