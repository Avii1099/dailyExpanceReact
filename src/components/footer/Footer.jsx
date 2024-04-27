import { Box, IconButton, Typography } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';

function Footer() {
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
        maxWidth: 'sm',
        mx: 'auto',
        left: 0,
        right: 0,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
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
        <Typography variant="caption">Analysis</Typography>
      </Box>

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
