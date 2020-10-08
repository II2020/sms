import { combineReducers } from 'redux';
import { ThemeReducer } from './ThemeReducer';
import { CurrentPathReducer } from './CurrentPathReducer';

const allReducers = combineReducers({
    ThemeReducer: ThemeReducer,
    CurrentPathReducer: CurrentPathReducer,
});

export default allReducers;
