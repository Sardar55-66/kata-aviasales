import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import * as reducers from './Components/Reducer/Reducer';
import { combineReducers } from '@reduxjs/toolkit';



const rootReducer = combineReducers({
  tabs: reducers.tabsReducer,
  filters: reducers.filtersReducer,
})



const store = configureStore({reducer: rootReducer})


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App 
        />
      </Provider>
    </React.StrictMode>
  );
