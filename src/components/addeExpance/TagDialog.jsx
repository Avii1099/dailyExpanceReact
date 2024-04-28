import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  IconButton,
  Box,
  Grid,
  Typography,
  Slide,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Transition from '../common/Transition';

function TagDialog({ open, handleClose }) {
  // Array of tags for the demonstration
  const tags = [
    { icon: '🏠', label: 'rent' },
    { icon: '💊', label: 'health' },
    { icon: '🍕', label: 'food' },
    // Add more tags as needed
  ];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'flex-end',
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', m: 0 }}>
        EXPENSES
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {tags.map((tag, index) => (
            <Grid item xs={3} key={index} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  borderRadius: '50%',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.25)',
                  },
                  transition: 'transform 0.3s ease-in-out',
                }}
                onClick={() => {
                  // Handle tag selection
                  handleClose();
                }}
              >
                <Typography variant="h5">{tag.icon}</Typography>
                <Typography variant="subtitle2">{tag.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Dialog>
  );
}

export default TagDialog;
