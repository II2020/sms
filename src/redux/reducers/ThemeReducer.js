import { SAVE_THEME_WHILE_LOGIN } from '../action/Theme';

const initialState = {
    defaultTheme: {
        backgroundColor: '#2721F6',
        color: '#F1F1F1',
    },
};

export const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_THEME_WHILE_LOGIN:
            return {
                ...state,
                defaultTheme: (state.defaultTheme = action.payload),
            };

        default:
            return state;
    }
};
