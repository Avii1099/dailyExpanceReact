import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  CssBaseline,
  Typography,
} from '@mui/material';

import AnalyticIcon from '@mui/icons-material/Assessment'; // Choose appropriate icons
import ChangeLogIcon from '@mui/icons-material/Update'; // Choose appropriate icons
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
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
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
