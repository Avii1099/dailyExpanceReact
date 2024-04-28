import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Typography, Box, Card, CardContent } from '@mui/material';

function Analytic() {

    let analytic = [
        {
            title: "Highest Spent",
            date: "Sun Apr 28 2024",
            amount: "- 10$",
            details: "",
            icon: ""
        },
        {
            title: "Most Entry",
            date: "",
            details: "1 on 🏠 rent",
            amount: "- 10.00$",
            icon: ""
        },
        {
            title: "Rent",
            date: "",
            details: "1 entry",
            amount: "$ -10.00",
            icon: "🏠"
        }

    ]
    const data = [
        { date: 'Apr 01', amount: 0 },
        { date: 'Apr 06', amount: 0 },
        { date: 'Apr 11', amount: 0 },
        { date: 'Apr 16', amount: 0 },
        { date: 'Apr 21', amount: 0 },
        { date: 'Apr 26', amount: 10 },
    ];


    return (
        <Box>
            {/* Total spent section */}
            <Box sx={{ m: 1, mb: 0.1, mt: 2 }}>

                <Typography variant="h3" color="error" gutterBottom>
                    $ -10
                </Typography>
                <Typography variant="subtitle1" gutterBottom color="#a7a5a5">
                    Total spent this month
                </Typography>
            </Box>

            {/* Graph section */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    {/* <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF" /> */}
                    <XAxis dataKey="date" stroke="#FFFFFF" strokeDasharray="10" />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#f65858ad" />
                </BarChart>
            </ResponsiveContainer>


            {/* Insights section */}
            <Box sx={{ mt: 4 }}>
                {analytic.map((item, index) => (
                    <Card key={index} variant="outlined" sx={{ display: 'flex', mb: 2, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#2a283ad4', py: 0.1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>

                            {item.icon && <span role="img" aria-label="icon" style={{ fontSize: '35px' }}>{item.icon}</span>}
                            <CardContent>
                                <Typography variant="subtitle1" style={{ fontSize: '1.1rem' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="#a7a5a5">
                                    {item.details || item.date}
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ mr: 2, borderRadius: 1, px: 2 }}>
                            <Typography variant="subtitle1" color="#f65858ad" style={{ fontSize: '1.2rem' }}>
                                {item.amount}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default Analytic
