/**
 * Created by bohdan on 20.02.2018.
 */

import levels from '../utils/levels'

import { createSelector } from 'reselect'

const getXp = state => state.xp;

const getHealth = state => state.stats.health;

export const getLevel = createSelector(
    getXp,
    xp => levels.filter(level => xp >= level.xp).length
);

export const getMaxHealth = createSelector(
    getLevel,
    l => levels[l-1].maxHealth
);

export const isHealthLow = createSelector(
    [ getHealth, getMaxHealth ],
    (health, maxHealth) => health < maxHealth * .15
);

