import { Card, CardContent, Typography, Box } from '@mui/material';
import './expense.css';

// This is a functional component for the Expense Summary
const ExpenseSummary = ({ totalSpent }) => {
  return (
    <Box
      sx={{
        maxWidth: 'sm',
        mx: 'auto',
        flex: '1 0 auto',
        height: 'calc(100vh - 64px - 48px)',
        overflowY: 'auto',
        pt: 8,
      }}
      className="scrollbar-container"
    >
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
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
          </Typography>
          <Typography variant="h6" component="div">
            Spent this month Spent this month Spent this month
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
    </Box>
  );
};

// Default props in case they're not passed
ExpenseSummary.defaultProps = {
  totalSpent: 0, // Default total spent
};

export default ExpenseSummary;
