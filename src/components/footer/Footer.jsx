import { Box, IconButton, Typography } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        maxWidth: '503px',
        mx: 'auto',
        left: 0,
        right: 0,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Link to="/analytic" style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton area-label="analysis">
            <BarChartIcon />
          </IconButton>
          <Typography
            variant="caption"
            sx={{
              color: 'white',
            }}
          >
            Analysis
          </Typography>
        </Box>
      </Link>

      {/* <Link to="/">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton area-label="add" color="primary" size="large" onClick={handleAddClick}>
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>
        </Box>
      </Link> */}

      {location.pathname === '/' ? (
        <Link to="/add-expanse" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <IconButton area-label="add" color="primary" size="large">
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          </Box>
        </Link>
      ) : (
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <IconButton area-label="add" color="primary" size="large">
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          </Box>
        </Link>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <IconButton area-label="change log">
          <CampaignIcon />
        </IconButton>
        <Typography variant="caption">Change Log</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
