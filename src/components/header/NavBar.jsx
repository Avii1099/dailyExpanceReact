import { AppBar, Toolbar, Typography } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">EXPENSES</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
