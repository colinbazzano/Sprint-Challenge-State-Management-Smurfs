import { useState } from 'react';

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = newValue => {
        setValue(newValue);
    };

    return [value, setValue, handleChange];
};

export default useInput;