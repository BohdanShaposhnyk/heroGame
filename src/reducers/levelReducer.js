/**
 * Created by bohdan on 20.02.2018.
 */
import Actions from '../actions/hero'

const levelReducer = (state = 1, action) => {
    switch (action.type) {
        case Actions.LEVEL_UP:
            return state + 1;
        default:
            return state;
    }
};

export default levelReducer;