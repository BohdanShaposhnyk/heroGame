/**
 * Created by bohdan on 20.02.2018.
 */
import Actions from '../actions/hero'
import { createAction } from 'redux-actions'


export const gainXp = createAction(Actions.GAIN_XP);


export const move = createAction(Actions.MOVE, (x,y)=>({ x, y }));

export const drinkPotion = createAction(Actions.DRINK_POTION);

export const takeDamage = createAction(Actions.TAKE_DAMAGE);