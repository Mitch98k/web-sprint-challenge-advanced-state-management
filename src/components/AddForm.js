import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            info: {
                name: '',
                position: '',
                nickname: '',
                description: ''
            }
        }
    }
    handleChange = e => {
        this.setState({info: {[e.target.name]: e.target.value}})
    }

    handleSubmit = e => {
        e.preventDefault();
        addSmurf();
    }

    render() {
        return(<section>
            {console.log(this.state.info)}
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" />
                    <label htmlFor="position">Position:</label>
                    <input onChange={this.handleChange} name="position" id="position" />
                    <label htmlFor="nickname">Nickname:</label>
                    <input onChange={this.handleChange} name="nickname" id="nickname" />
                    <label htmlFor="description">Description:</label>
                    <input onChange={this.handleChange} name="description" id="description" />
                    
                    {this.props.isLoading && <h3>Loading</h3>}

                    {this.props.smurfs && this.props.smurfs.map(smurf => (
                        <h3 key={smurf.id}>
                        pame: {smurf.name},
                        position: {smurf.position},
                        nickname: {smurf.nickname},
                        description: {smurf.description}
                        </h3>
                    ))}

                    {this.props.error && <h3>{this.props.error}</h3>}
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button onClick={this.handleSubmit}>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { addSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.