import { combineReducers } from 'redux';
import { ThemeReducer } from './ThemeReducer';

const allReducers = combineReducers({
    ThemeReducer: ThemeReducer,
});

export default allReducers;
