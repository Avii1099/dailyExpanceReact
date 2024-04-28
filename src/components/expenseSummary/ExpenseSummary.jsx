import PropTypes from 'prop-types';

import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from '@mui/material';

import './expense.css';

// This is a functional component for the Expense Summary
function ExpenseSummary({ totalSpent = 110 }) {
  const expenses = [
    // Add your expenses data here
    {
      date: 'Today',
      total: -45.0,
      items: [{ emoji: '🏠', title: 'Rent', time: '12:44 AM', amount: -45 }],
    },
    {
      date: 'Apr 24, 2024',
      total: -20.0,
      items: [{ emoji: '🏠', title: 'Rent', time: '04:28 AM', amount: -20 }],
    },
    {
      date: 'Apr 23, 2024',
      total: -30.0,
      items: [
        { emoji: '(Friend)', title: 'Friend', time: '06:01 AM', amount: -20 },
        { emoji: '🏠', title: 'Rent', time: '05:58 AM', amount: -10 },
      ],
    },
    // ... more expenses
  ];

  return (
    <Box
      sx={{
        maxWidth: 'sm',
        mx: 'auto',
        flex: '1 0 auto',
        height: 'calc(100vh - 64px - 48px)',
        overflowY: 'auto',
        pb: 5,
      }}
      className="scrollbar-container"
    >
      <Card
        sx={{
          backgroundColor: 'transparent',
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            minHeight={400}
          >
            <Typography variant="h6" paddingTop={2}>
              Spent this month
            </Typography>
            <Typography variant="h2" color="#f50057">
              -{totalSpent < 0 ? '-' : ''}${Math.abs(totalSpent).toFixed(2)}
            </Typography>
          </Box>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {expenses.map((expense, index) => (
              <div key={index}>
                <ListItem sx={{ py: 3, justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    {expense.date}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    ${expense.total.toFixed(2)}
                  </Typography>
                </ListItem>
                {expense.items.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    sx={{ py: 3, justifyContent: 'space-between' }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'transparent' }}>
                        {item.emoji}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={item.time}
                      primaryTypographyProps={{ fontWeight: 'medium' }}
                      secondaryTypographyProps={{ color: 'text.secondary' }}
                    />
                    <Typography variant="subtitle1" color="error">
                      {item.amount < 0 ? '-' : ''}${Math.abs(item.amount)}
                    </Typography>
                  </ListItem>
                ))}
                {index < expenses.length - 1 && <Divider component="li" />}
              </div>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}

ExpenseSummary.propTypes = {
  totalSpent: PropTypes.number,
};

export default ExpenseSummary;
