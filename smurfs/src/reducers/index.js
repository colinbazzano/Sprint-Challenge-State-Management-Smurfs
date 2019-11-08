import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                 ...state,
                 isFetching: true,
                 error: null
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                error: null
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default: 
        return state;
    }
}

export default reducer;