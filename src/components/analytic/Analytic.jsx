import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Typography, Box, Paper, Card, CardContent } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import HomeIcon from '@mui/icons-material/Home';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';


function Analytic() {
    const dataset = [
        {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: 'Jan',
        },
        {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: 'Feb',
        }
    ];

    const valueFormatter = (value) => `${value}mm`;

    return (
        <Box>
            {/* Total spent section */}
            <Box sx={{ m: 1 }}>

                <Typography variant="h3" color="error" gutterBottom>
                    $ -10
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Total spent this month
                </Typography>
            </Box>

            {/* Graph section */}
            <ResponsiveContainer width="100%" height={200}>

                <BarChart
                    dataset={dataset}
                    // xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                    series={[
                        { dataKey: 'london', label: 'London', valueFormatter },
                        { dataKey: 'paris', label: 'Paris', valueFormatter },

                    ]}
                // {...chartSetting}
                />
            </ResponsiveContainer>

            {/* Insights section */}
            <Box sx={{ mt: 4 }}>
                <Card variant="outlined" sx={{ display: 'flex', mb: 2, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#5d5d5c' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                        <InsightsIcon color="primary" />
                        <CardContent>
                            <Typography variant="subtitle1">
                                Highest Spent
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Sun Apr 28 2024
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{ mr: 2, backgroundColor: 'error.main', borderRadius: 1, px: 2, py: 0.5 }}>
                        <Typography variant="subtitle1" color="common.white">
                            - $10
                        </Typography>
                    </Box>
                </Card>

                <Card variant="outlined" sx={{ display: 'flex', mb: 2, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#5d5d5c' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                        <HomeIcon color="primary" />
                        <CardContent>
                            <Typography variant="subtitle1">
                                Most Entry
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                1 on 🏠 rent
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{ mr: 2, backgroundColor: 'error.main', borderRadius: 1, px: 2, py: 0.5 }}>
                        <Typography variant="subtitle1" color="common.white">
                            - $10.00
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Analytic
