import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
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
        case POST_SMURFS_START:
            return {
                ...state,
                isPosting: true
            }
        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                isPosting: false
            }
        case POST_SMURFS_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default: 
        return state;
    }
}

export default reducer;