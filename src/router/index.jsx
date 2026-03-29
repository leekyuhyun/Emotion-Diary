import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../views/Home';
import New from '../views/New';
import Diary from '../views/Diary';
import Edit from '../views/Edit';
import Statistics from '../views/Statistics';
import Notfound from '../views/Notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'new', element: <New /> },
      { path: 'diary/:id', element: <Diary /> },
      { path: 'edit/:id', element: <Edit /> },
      { path: 'statistics', element: <Statistics /> },
    ],
  },
  {
    path: '*',
    element: <Notfound />,
  },
]);

export default router;
