import { useState } from "react";

const Score = () => {
    const [score, setScore] = useState(0);

    const addScore = () => {
        if (score === 99) return 
        setScore((score) => score + 1)
    }

    const subtractScore = () => {
        if (score === 0) return
        setScore((score) => score - 1)
    }

    return (  
        <div>
            <h1 className="score">{score}</h1>
            <button onClick={subtractScore}>-</button>
            <button onClick={addScore}>+</button>
        </div>
    );
}
 
export default Score;