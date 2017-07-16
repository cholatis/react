import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// () => []  function return empty array
// libraries: LibraryReducer  (assign LibraryReducer to key name libraries)
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

// console.log(store.getState());
// { libraries: [] }    (return empty array)
// console.log(store.getState());
// { libraries: [ { id: 1, title: 'Webpack', description: '.....'}] }
