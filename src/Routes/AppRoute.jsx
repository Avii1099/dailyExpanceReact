import { Analytic, ExpenseSummary, AddExpanse } from '../components';

const appRoutes = [
  { path: '/', element: <ExpenseSummary /> },
  { path: '/analytic', element: <Analytic /> },
  { path: '/add-expanse', element: <AddExpanse /> },
];

export default appRoutes;
