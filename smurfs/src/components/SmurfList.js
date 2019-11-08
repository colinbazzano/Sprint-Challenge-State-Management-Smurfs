import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

function SmurfList(props) {
    console.log('smurf list', props);
    return (
        <>
        {props.isFetching && <div>loading...</div>}
        {props.error && <div>{props.error.message}</div>}
        {props.smurfs.map(smurf => <Smurf key={smurf.id} data={smurf} /> )};
        </>
    );
};

