import { SAVE_CURRENT_PATH } from '../action/CurrentPath';

const initialState = {
    currentPath: 'home',
};

export const CurrentPathReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CURRENT_PATH:
            return {
                ...state,
                currentPath: (state.currentPath = action.payload),
            };

        default:
            return state;
    }
};
