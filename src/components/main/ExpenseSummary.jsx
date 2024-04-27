import { Card, CardContent, Typography, Box } from '@mui/material';

// This is a functional component for the Expense Summary
const ExpenseSummary = ({ totalSpent }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'primary.dark', // Customize color
        color: 'white',
        margin: 2,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          Spent this month
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight={100}
        >
          <Typography variant="h3" component="div">
            {totalSpent < 0 ? '-' : ''}${Math.abs(totalSpent).toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

// Default props in case they're not passed
ExpenseSummary.defaultProps = {
  totalSpent: 0, // Default total spent
};

export default ExpenseSummary;
