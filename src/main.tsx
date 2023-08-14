import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './assets/styles/styles.css'
import App from './App.tsx'
import { Provider } from "react-redux";
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
