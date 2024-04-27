import { Box, Container, Typography } from '@mui/material';

import { useState } from 'react';
import { Copyright } from '@mui/icons-material';

function Footer() {
  const [value, setValue] = useState(0);
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        maxWidth: 'sm',
        mx: 'auto',
        left: 0,
        right: 0,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
