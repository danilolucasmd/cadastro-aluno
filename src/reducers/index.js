import { combineReducers } from 'redux';
import cards from './cards';

const app = combineReducers({
    cards,
});

export default app;
