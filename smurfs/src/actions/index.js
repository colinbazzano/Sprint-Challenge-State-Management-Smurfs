import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

// export const smurfsStart = () => ({ type: FETCH_SMURFS_START });

// export const smurfsSuccess = data => ({
//     type: FETCH_SMURFS_SUCCESS,
//     payload: data
// });

// export const smurfsFailure = error => ({
//     type: FETCH_SMURFS_FAILURE,
//     payload: error
// });

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
        .catch(error => dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.response}));
};


// this is where Smurf POST begins

export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE';

export const postSmurfs = data => dispatch => {
    dispatch({ type: POST_SMURFS_START });

    axios
        .post('http://localhost:3333/smurfs', data)
        .then(res => console.log('New Smurf Posted', res))
        .catch(error => dispatch({ type: POST_SMURFS_FAILURE, payload: error.response }));
};