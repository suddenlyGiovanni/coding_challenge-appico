// REACT
import React, { Component } from 'react';

// REDUX
import { store } from '../index';
// ACTIONS
import { setSources } from '../actions/news';

// COMPONENTS
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel } from 'material-ui/Form';

import Checkbox from 'material-ui/Checkbox';

class SourceSelector extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            all: false,
            theVerge: false,
            techcrunch: false,
            hackerNews: false
        };
    }

    handleChange( event, checked ) {
        this.setState( { [ event.target.value ]: checked } );
    }



    dispatchSources( sources ) {
        store.dispatch( setSources( sources ) );
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>
                        Select Sources:
                    </FormLabel>
                    <FormGroup>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.all}
                                    onChange = {(event, checked ) => this.handleChange( event, checked )}
                                    value = 'all'/>
                            }
                            label='All'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.theVerge}
                                    onChange = {(event, checked ) => this.handleChange( event, checked )}
                                    value = 'theVerge'/>
                            }
                            label='the Verge'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.techcrunch}
                                    onChange = {(event, checked ) => this.handleChange( event, checked )}
                                    value = 'techcrunch'/>
                            }
                            label='TechCrunch'/>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked = {this.state.hackerNews}
                                    onChange = {(event, checked ) => this.handleChange( event, checked )}
                                    value = 'hackerNews'/>
                            }
                            label='Hacker News'/>

                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}


export default SourceSelector;
