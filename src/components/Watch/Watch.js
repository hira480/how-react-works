import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }

    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>This is my smart watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Step</button>
            <Display name="Mannan Hira" steps={steps}></Display>
        </div>
    );
};

export default Watch;