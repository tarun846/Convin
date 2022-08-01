import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Context from './Context/Context';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>


 <Provider store = {store} >
   
    <App />
 </Provider>
 </Context>

);

