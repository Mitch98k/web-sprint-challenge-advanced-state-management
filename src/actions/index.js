import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESSFUL = 'FETCH_SMURFS_SUCCESSFUL';
export const FETCH_SMURFS_FAILED = 'FETCH_SMURFS_FAILED';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESSFUL = 'ADD_SMURF_SUCCESSFUL';
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED';

export const getSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURFS });

    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        debugger;
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

export const addSmurf = () => (dispatch) => {
    dispatch({ type: ADD_SMURF });

    axios.post('http:/localhost:3333/smurfs', this.state.info )
}
//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.