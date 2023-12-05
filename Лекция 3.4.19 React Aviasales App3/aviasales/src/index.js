import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { tabsReducer, filtersReducer, getTicketsData, errorFunc, spinner } from './Components/Reducer/Reducer';
import { combineReducers } from '@reduxjs/toolkit';

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';






const rootReducer = combineReducers({
  tabs: tabsReducer,
  filters: filtersReducer,
  tickets: getTicketsData,
  error: errorFunc,
  spin: spinner,
})



const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App 
        />
      </Provider>
    </React.StrictMode>
  );
