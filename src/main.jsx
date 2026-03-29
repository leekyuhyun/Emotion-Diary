import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App>
    <RouterProvider router={router} />
  </App>,
);
