import React from 'react';
import { Box, Typography } from '@mui/material';
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '1em 0',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  zIndex: 1000,
};

const iconStyle = {
  margin: '0 10px',
  fontSize: '24px',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

const iconHoverStyle = {
  '&:hover': {
    color: '#FFD700', // cor dourada ao passar o mouse
  },
};

function Footer() {
  return (
    <Box sx={footerStyle}>
      <Typography variant="body2" color="white">
        {'© '}
        Futebol News {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Box mt={1}>
        <BsFacebook style={{ ...iconStyle, ...iconHoverStyle }} />
        <RiInstagramFill style={{ ...iconStyle, ...iconHoverStyle }} />
        <AiFillTwitterCircle style={{ ...iconStyle, ...iconHoverStyle }} />
        <AiFillLinkedin style={{ ...iconStyle, ...iconHoverStyle }} />
      </Box>
    </Box>
  );
}

export default Footer;
