import React, { useCallback, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  IconButton,
  Box,
  Grid,
  Typography,
  Slide,
} from '@mui/material';
import { fetchExpanseEmoji } from '../../api';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TagDialog({ open, handleClose, handleSelectTag }) {
  const fetchAPI = useCallback(async () => {
    try {
      await fetchExpanseEmoji();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAPI();
  }, []);

  const tags = [
    { icon: '🏠', label: 'rent' },
    { icon: '💊', label: 'health' },
    { icon: '🍕', label: 'food' },
    { icon: '👚', label: 'clothes' },
    { icon: '🎁', label: 'gift' },
    { icon: '📚', label: 'education' },
    { icon: '✈️', label: 'vacation' },
    { icon: '🛒', label: 'groceries' },
  ];

  const selectTag = (tag) => {
    handleSelectTag(tag);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          bgcolor: 'black',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
          borderRadius: '20px 20px 0 0',
          maxHeight: '50vh',
          position: 'absolute',
          bottom: '55px',
          width: '100%',
          maxWidth: '500px',
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: 'center',
          m: 0,
          color: 'rgba(255, 255, 255, 0.7)',
          py: 1,
        }}
      >
        EXPENSES
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'text.secondary',
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      </DialogTitle>
      <Box sx={{ overflowY: 'auto' }}>
        <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
          {tags.map((tag, index) => (
            <Grid
              item
              xs={4}
              sm={3}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <IconButton
                sx={{
                  borderRadius: '50%',
                  fontSize: '1rem',
                  color: 'text.primary',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
                onClick={() => selectTag({ icon: tag.icon, label: tag.label })}
              >
                <span role="img" aria-label={tag.label}>
                  {tag.icon}
                </span>
              </IconButton>
              <Typography
                variant="subtitle2"
                sx={{ mt: 1, color: 'text.primary' }}
              >
                {tag.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Dialog>
  );
}

export default TagDialog;
