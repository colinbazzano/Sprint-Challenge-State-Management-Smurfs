import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';



const SmurfList = () => {
    const dispatch = useDispatch();
    const smurfs = useSelector(state => state.smurfs);


    useEffect(() => {
        dispatch(fetchSmurfs());
    }, []);

    const renderSmurfs = () => {
        return smurfs.map(smurf => <Smurf key={smurf.id} data={smurf} />);
    };

    return <div>{smurfs ? renderSmurfs() : 'Here come the Smurfs...'}</div>
};

export default SmurfList;

// function SmurfList(props) {
//     console.log('smurf list', props);
//     return (
//         <>
//         {props.isFetching && <div>loading...</div>}
//         {props.error && <div>{props.error.message}</div>}
//         {props.smurfs.map(smurf => <Smurf key={smurf.id} data={smurf} /> )};
//         </>
//     );
// };

// const mapDispatchToProps = {
//     fetchSmurfs
// }

// export default connect(state => {
//     console.log('mSTP.state', state);
//     return state;
// }, 
// mapDispatchToProps)(SmurfList);