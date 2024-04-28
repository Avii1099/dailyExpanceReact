import { Analytic, ExpenseSummary } from '../components';

const appRoutes = [
  { path: '/', element: <ExpenseSummary /> },
  { path: '/analytic', element: <Analytic /> },
];

export default appRoutes;
