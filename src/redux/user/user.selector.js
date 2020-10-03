import { createSelector } from "reselect";

const selectUser = (state) => state.user;

// first paramater can be an array of our input selector
// second  being a function that get the return of the selectUser which is the input selector
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentuser);
