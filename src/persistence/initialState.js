/**
 * Created by bohdan on 20.02.2018.
 */

const initialState = {
    hero: {
        xp: 0,
        level: 1,
        position: {
            x: 0,
            y: 0,
        },
        health: 50,
        maxHealth: 50,
        inventory: {
            potions: 1,
        }
    },
    monster: {}
};

export default initialState;