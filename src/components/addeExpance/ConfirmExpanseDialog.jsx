import React from 'react';
import {
    Dialog,
    DialogTitle,
    IconButton,
    Box,
    Typography,
    Slide,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmExpenseDialog({ open, handleClose, selectedTag, amount }) {

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
                    maxWidth: '500px'
                }

            }}
        >
            <DialogTitle sx={{ textAlign: 'left', m: 0, py: 1, fontSize: '30px' }}>
                Confirm
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
            <Box sx={{ px: 3, py: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <InfoOutlinedIcon color="info" />
                    <Typography variant="body2" sx={{ ml: 1, color: 'rgba(255, 255, 255, 0.7);' }}>
                        Help us ensure accuracy by reviewing your expense before confirming because you can not edit it later.
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    p: 2,
                }}>
                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                        ${amount}
                    </Typography>
                    <ArrowRightAltIcon sx={{ mx: 2, fontSize: '40px', fontWeight: 'bold' }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '45px' }}>
                        <span role="img" aria-label={selectedTag?.label} >{selectedTag?.icon}</span>
                        <Typography variant="subtitle1" sx={{ ml: 1 }}>
                            {selectedTag?.label}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{

                    left: 0,
                    right: 0,
                    paddingBottom: 2
                }}
            >
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="success"
                >
                    Confirm
                </Button>
            </Stack>
        </Dialog>
    );
}
