import {createStore, combineReducers} from 'redux';
import {translateReducer} from './reducers/translateReducer';
import {ruEnReducer} from './reducers/ruEnReducer';
const rootReducer = combineReducers({
  translate: translateReducer,
  ruEn: ruEnReducer
  
});

export default createStore(rootReducer);