import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CardMedia } from '@mui/material';
import { newsData } from '../../assets/data/NewsData'; // Importa os dados de notícias

function NewsDetail() {
  const { id } = useParams();
  const item = newsData.find(newsItem => newsItem.id === parseInt(id));

  if (!item) {
    return <Typography>Notícia não encontrada</Typography>;
  }

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {item.title}
      </Typography>
      <CardMedia
        component="img"
        height="600px"
        image={item.image}
        alt={item.title}
      />
      <Typography variant="body1"height="400px">
        {item.comment}
      </Typography>
    </Box>
  );
}

export default NewsDetail;
