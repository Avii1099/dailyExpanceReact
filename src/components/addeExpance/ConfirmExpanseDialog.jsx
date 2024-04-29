import React, { useEffect } from 'react';
import { Dialog, Typography } from '@mui/material';

export default function ConfirmExpenseDialog({ open, handleClose, handleSelectTag, amount }) {
    const selectTag = (tag) => {
        handleSelectTag(tag);
    };
    console.log(handleSelectTag);

    return (
        <Dialog open={open} onClose={handleClose}>
            <Typography variant="h6" gutterBottom>
                Confirm
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                ${amount}
            </Typography>
        </Dialog>
    );
}
