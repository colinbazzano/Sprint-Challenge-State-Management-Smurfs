import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { postSmurfs } from '../actions';

const CreateSmurf = () => {
    const [name, setName, handleName] = useInput('');
    const [age, setAge, handleAge] = useInput('');
    const [height, setHeight, handleHeight] = useInput('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(postSmurfs({ name, age, height }));
        setName('');
        setAge('');
        setHeight('');
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                placeholder="What's your name?"
                onChange={e => handleName(e.target.value)}
                value={name}
            />
            <input 
                type='number'
                min='1'
                max='1000'
                name='age'
                placeholder="Enter your age"
                onChange={e => handleAge(e.target.value)}
                value={age}
            />
            <input  
                type='text'
                name='name'
                placeholder="What's your height?"
                onChange={e => handleHeight(e.target.value)}
                value={height}
            />
            <button type="submit">Create Your Smurf!</button>
            </form>
        </div>
    );
};

export default CreateSmurf;