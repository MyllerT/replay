import { Button as MuiButton, styled } from '@mui/material';

const CustomButton = styled(MuiButton)(({ theme }) => ({

  color: theme.palette.primary.contrastText, // Cor do texto
  backgroundColor: theme.palette.primary.main, // Cor de fundo
  '&:hover': {
    backgroundColor: theme.palette.primary.dark, // Cor de fundo ao passar o mouse
  },
}));

function Button(props) {
  return <CustomButton variant="contained" {...props} />;
}

export default Button;
