import { NEW_MESSAGE } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            return [action.text, ...state];
        default:
            return state;
    }
};