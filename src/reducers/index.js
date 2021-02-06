import { FETCH_SMURFS, FETCH_SMURFS_SUCCESSFUL, FETCH_SMURFS_FAILED, ADD_SMURF } from '../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_SMURFS: {

        }
        case FETCH_SMURFS_SUCCESSFUL: {

        }
        case FETCH_SMURFS_FAILED: {

        }
        case ADD_SMURF: {

        }
        default: return state;
    }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary