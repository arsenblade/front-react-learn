import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss';
import './styles/fonts.scss';
import MainProvider from './main-provider/MainProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MainProvider>
    <App />
  </MainProvider>
);
