import React from 'react';

const Smurf = ({ data }) => {
    return (
        <>
            <h1>{data.name}</h1>
            <p>{data.age}</p>
            <p>{data.height}</p>
        </>
    );
};

export default Smurf;