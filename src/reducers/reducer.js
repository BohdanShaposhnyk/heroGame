/**
 * Created by bohdan on 20.02.2018.
 */
import { combineReducers } from 'redux'

import monster from './monsterReducer'
import hero from './heroReducer'


const reducer = combineReducers({
    hero,
    monster
});

export default reducer;