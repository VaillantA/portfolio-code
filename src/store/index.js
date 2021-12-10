/* eslint-disable no-underscore-dangle */
//* Dependencies imports
import { createStore } from 'redux';

//* Reducer import
import reducer from '../reducers/index.js';

//* Definition of the store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
); 
//* Add redux extention
//* Link : https://github.com/zalmoxisus/redux-devtools-extension#installation

//* Store export
export default store;
