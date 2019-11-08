import React from 'react';

const Smurf = ({ data }) => {
    return (
        <div className="smurf">
            <h1>{data.name}</h1>
            <p>Age: {data.age} Years Old</p>
            <p>Height: {data.height}</p>
        </div>
    );
};

export default Smurf;