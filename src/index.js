/**
 * Created by bohdan on 20.02.2018.
 */


// import React from 'react'
// import { render } from 'react-dom'
import configureStore from './Store'
import { levelUp } from './action_creators/hero'


document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const store = configureStore();
    store.dispatch(levelUp());
});