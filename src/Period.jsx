import { useState } from 'react';

const Period = () => {
    const [period, setPeriod] = useState(1);

    const addPeriod = () => {
        if (period === 9) return
        setPeriod((period) => period + 1);
    }

    const subtractPeriod = () => {
        if (period === 0) return
        setPeriod((period) => period - 1);
    }
 
    return ( 
        <div className='period-container'>
            <h1 id="period">{period}</h1>
            <button onClick={subtractPeriod}>-</button>
            <button onClick={addPeriod}>+</button>
        </div>
    );
}

export default Period;