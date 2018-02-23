/**
 * Created by bohdan on 20.02.2018.
 */

import Actions from '../actions/hero'
import initialState from '../persistence/initialState'
import * as selectors from '../selectors/heroSelectors'


const inventoryReducer = (state = initialState.hero.inventory, action) => {
    let { potions } = state;

    switch (action.type) {
        case Actions.DRINK_POTION:
            potions = Math.max(0, potions - 1);
            return { ...state, potions };
        default:
            return state;
    }
};

const hero = (state = initialState.hero, action) => {

    switch (action.type) {
        case Actions.GAIN_XP:
            let { xp/*, level */} = state;
            xp += action.payload;
//            level = selectors.getLevel({ ...state, xp });
 //           maxHealth = selectors.getMaxHealth({ ...state, xp });
            return { ...state, xp/*, level, maxHealth*/ };
        case Actions.MOVE:
            let { position: { x, y } } = state;
            x += action.payload.x;
            y += action.payload.y;
            return { ...state, position: { x, y } };
        case Actions.DRINK_POTION:
            let { health } = state;
            const { inventory } = state;
            if (inventory.potions === 0) return state;
         //   health = Math.min(health + 20, maxHealth);
            health += 20;
            return {
                ...state,
                health,
                inventory: inventoryReducer(inventory, action)
            };
        case Actions.TAKE_DAMAGE:
            health = Math.max(0, health - action.payload);
            return { ...state, health };
        default:
            return state;
    }
};

export default hero;
