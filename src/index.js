/**
 * Created by bohdan on 20.02.2018.
 */


// import React from 'react'
// import { render } from 'react-dom'
import configureStore from './Store'
import * as actions from './action_creators/hero'
import { getHero } from './selectors/heroSelectors'

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const store = configureStore();
    store.subscribe(() => {
       const hero = getHero(store.getState().hero);
       console.log(hero);
    });
    store.dispatch(actions.move(2,4));
    store.dispatch(actions.takeDamage(25));
    store.dispatch(actions.gainXp(20));
    store.dispatch(actions.drinkPotion());
    store.dispatch(actions.gainXp(100));
    store.dispatch(actions.gainXp(50));
});