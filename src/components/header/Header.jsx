import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ContrastIcon from '@mui/icons-material/Contrast';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <ContrastIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: 'center' }}
        >
          EXPENSES
        </Typography>

        <IconButton edge="end" color="inherit" aria-label="settings">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
