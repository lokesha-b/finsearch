import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ScrollableList from './ScrollableList';
import rootReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { search } from './actions';

const store = createStore(rootReducers);
console.log('state ', store.getState());

store.subscribe(() => console.log('store'), store.getState());
//store.dispatch(search('Bank'));
ReactDOM.render(
<Provider  store={store}>
  <App />
</Provider>
  , document.getElementById('root'));
//registerServiceWorker();
