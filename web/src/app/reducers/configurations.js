import { SET_THEME } from '../actions/configurations';
import { THEME_V1 } from '../../shared/constants';

const initialState = {
    theme: localStorage.getItem(THEME_V1) || 'light',
};

export default (store = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...store,
                theme: action.payload.theme,
            };

        default:
            return store;
    }
};
