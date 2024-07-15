import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Button from '../Button/Button'; // Assuming this is a custom Button component
import { bet } from '../../assets/data/NewsData'; // Importing newsData from data folder
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

const styles = {
  boxItems: {
    transition: '0.5s',
    '&:hover': {
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
      cursor: 'pointer',
      transform: 'translateY(-5px)',
    },
    marginBottom: '16px',
    width: '100%',
    maxWidth: '345px',
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

function Bet() {
  return (
    <Box sx={{ padding: '16px' }}>
      <Grid container spacing={3} justifyContent="space-around">
        {bet.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box
              sx={styles.boxItems}
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

export default Bet;
