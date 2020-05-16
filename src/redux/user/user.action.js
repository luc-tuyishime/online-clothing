import { UserActionsTypes } from './user.types.js';

export const setCurrentUser = user => ({
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
})