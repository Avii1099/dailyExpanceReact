import { Box, Typography, Button, Dialog, Input } from '@mui/material';

import Transition from '../common/Transition';
import TagDialog from './TagDialog';
import ConfirmExpenseDialog from './ConfirmExpanseDialog';
import { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ReplayIcon from '@mui/icons-material/Replay';

export default function AddExpanse() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [amount, setAmount] = useState(0)
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
    handleClose();
  };

  const handleNext = () => {
    if (amount <= 0) {
      setErrorMessage('Amount should be bigger than 0');
    } else if (!selectedTag) {
      setErrorMessage('Please select a tag!');
    } else {
      setErrorMessage('');
      setConfirmOpen(true);
    }
  };

  return (
    <>
      <TagDialog open={open} handleClose={handleClose} handleSelectTag={handleSelectTag} />
      <ConfirmExpenseDialog
        open={confirmOpen}
        handleClose={() => setConfirmOpen(false)}
        selectedTag={selectedTag}
        amount={amount}
      />
      <Dialog open={true} TransitionComponent={Transition} keepMounted>
        <Box
          sx={{
            bgcolor: '#000000',
            color: 'text.primary',
            borderRadius: 1,
            p: 1,
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '250px'
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Today at Sun Apr 28 2024
          </Typography>
          <Input
            placeholder='0'
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            sx={{
              fontSize: '40px',
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
              style: { textAlign: 'center', marginBottom: 2 },
            }}
          />
          {errorMessage && (
            <Typography variant="caption" color="error" gutterBottom
              sx={{
                fontSize: '15px',
                mt: 1
              }}>
              {errorMessage}
            </Typography>
          )}
          <br />
          <ArrowDownwardIcon />
          <Button
            // startIcon={<TagIcon />}
            sx={{ my: 2, color: 'grey' }}
            onClick={handleOpen}
          >
            {selectedTag ? (
              <>
                <span role="img" aria-label={selectedTag.label} style={{ paddingRight: '4px', fontSize: '20px' }}>{selectedTag.icon}</span>
                <span style={{ color: 'white' }}>
                  {selectedTag.label}
                </span>
                <ReplayIcon sx={{ ml: 1 }} />
              </>
            ) : (
              <>
                <LoyaltyIcon sx={{ mr: 1 }} />
                select your tag
                <ReplayIcon sx={{ ml: 1 }} />
              </>
            )}
          </Button>
          <br />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            {/* Cancel Button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: 'error.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'error.dark',
                },
                borderRadius: '20px',
                textTransform: 'none',
              }}
            >
              Cancel
            </Button>

            {/* Next Button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: 'background.paper',
                color: 'text.primary',
                '&:hover': {
                  bgcolor: 'grey.200',
                  color: 'black'
                },
                borderRadius: '20px',
                textTransform: 'none',
              }}
              onClick={handleNext}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
