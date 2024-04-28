import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Typography, Box, Card, CardContent, useTheme } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';

function Analytic() {
    const theme = useTheme();
    const analytic = [
        {
            title: "Highest Spent",
            date: "Sun Apr 28 2024",
            amount: "-10$",
            details: "",
            icon: "💰" // Replace with your actual icons or images
        },
        {
            title: "Most Entry",
            date: "",
            details: "1 on 🏠 rent",
            amount: "-10.00$",
            icon: "🏠" // Replace with your actual icons or images
        }
    ];

    const data = [
        { date: 'Apr 01', amount: 0 },
        { date: 'Apr 06', amount: 0 },
        // ... other data
        { date: 'Apr 26', amount: 10 },
    ];

    return (
        <Box sx={{
            maxWidth: 'sm',
            mx: 'auto',
            flex: '1 0 auto',
            height: 'calc(100vh - 64px - 48px)',
            overflowY: 'auto',
            pb: 5,
        }}
            className="scrollbar-container">

            <Card
                sx={{
                    backgroundColor: 'transparent',
                }}
            >
                <CardContent>


                    {/* Total spent section */}
                    <Box sx={{ m: 1, mt: 2, textAlign: 'left' }}>
                        <Typography variant="h3" color="error" gutterBottom>
                            $ -10
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ color: theme.palette.text.secondary }}>
                            Total spent this month
                        </Typography>
                    </Box>

                    {/* Graph section */}
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
                            <YAxis hide />
                            <Bar dataKey="amount" fill={theme.palette.error.main} barSize={15} />
                        </BarChart>
                    </ResponsiveContainer>

                    {/* Insights section */}
                    <Box sx={{ mt: 4 }}>
                        {analytic.map((item, index) => (
                            <Card key={index} sx={{
                                mb: 2,
                                bgcolor: '#1e1c27', // Card background
                                color: theme.palette.text.primary, // Text color inside card
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 1,
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="h6" sx={{ fontSize: '1.5rem', mr: 1 }}>{item.icon}</Typography>
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography variant="subtitle1">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                            {item.details || item.date}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <Typography variant="subtitle1" color="error" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    {item.amount}
                                </Typography>
                            </Card>
                        ))}


                    </Box>

                    <br /><br />
                    {/* Static Rent card at the bottom */}
                    <Card sx={{
                        display: 'flex',
                        mb: 2,
                        color: theme.palette.text.primary,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 1,
                        boxShadow: theme.shadows[1],
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ fontSize: '1.5rem', mr: 1 }}>🏠</Typography>
                            <CardContent sx={{ p: 0 }}>
                                <Typography variant="subtitle1">Rent</Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                    1 entry
                                </Typography>
                            </CardContent>
                        </Box>
                        <Typography variant="subtitle1" color="error" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                            $ -10.00
                        </Typography>
                    </Card>

                </CardContent>
            </Card>
        </Box>

    );
}

export default Analytic;
