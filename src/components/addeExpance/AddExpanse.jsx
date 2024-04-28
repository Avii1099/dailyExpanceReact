import { Box, Typography, Button, Dialog, Input } from '@mui/material';

import TagIcon from '@mui/icons-material/Tag';
import Transition from '../common/Transition';
import TagDialog from './TagDialog';
import { useState } from 'react';

export default function AddExpanse() {
  // useTheme allows you to use the theme in your style
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TagDialog open={open} handleClose={handleClose} />
      <Dialog open={true} TransitionComponent={Transition} keepMounted>
        <Box
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Today at Sun Apr 28 2024
          </Typography>
          <Input
            placeholder="0"
            sx={{
              fontSize: '30px',
              textAlign: 'center',
              '& input[type=number]': {
                '-moz-appearance': 'textfield',
                '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                  '-webkit-appearance': 'none',
                  margin: 0,
                },
              },
            }}
            type="number"
            inputProps={{
              style: { textAlign: 'center' },
            }}
          />
          <Button
            variant="outlined"
            startIcon={<TagIcon />}
            endIcon={<TagIcon />}
            sx={{ my: 2 }}
            onClick={handleOpen}
          >
            select your tag
          </Button>
          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button variant="contained" color="error">
              Cancel
            </Button>
            <Button variant="contained">Next</Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
