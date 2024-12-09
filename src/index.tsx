import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {store} from './store/index.js';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { checkAuth, fetchOffers } from './store/api-actions';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());
store.dispatch(checkAuth());
root.render(
  <Provider store={store}>
    <ToastContainer />
    <App/>
  </Provider>
);
