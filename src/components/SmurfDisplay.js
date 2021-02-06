import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {
    componentDidMount() {
        getSmurfs();
    //     axios.get('http://localhost:3333/smurfs')
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
    }

    render() {
        return(
        <div>
            <Smurf />
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {})(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.