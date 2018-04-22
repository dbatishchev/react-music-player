import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import AppContainer from "./containers/AppContainer";

const store = createStore(rootReducer, {
  player: {
    songs: [],
    activeSong: null,
    isLoading: false,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
