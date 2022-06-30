import useTimer from 'easytimer-react-hook';
import useSound from 'use-sound';
import { useState } from 'react';

const Timer = () => {
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [tenths, setTenths] = useState(0);
    const [timer] = useTimer({ countdown:true, precision: 'secondTenths'});
    const [playSound] = useSound(`${process.env.PUBLIC_URL}/Buzzer.mp3`, {volume: 0.01});

    //Sound horn at end of time duration
    timer.addEventListener("targetAchieved", () => playSound());

    return (
        <div className='timer'>
            <h1 id='clock'>{timer.getTimeValues().minutes < 1 ? `${timer.getTimeValues().toString(['seconds'])} . ${timer.getTimeValues().secondTenths}` : timer.getTimeValues().toString(['minutes', 'seconds'])}</h1>
            <div className='clock-btn'>
                <>
                    <input type="number" onChange={(e) => setMinute(e.target.value)} placeholder='MM' max="60" min="0"/>
                    <span>:</span>
                    <input type="number" onChange={(e) => setSecond(e.target.value)} placeholder='SS' max="59" min="0"/>
                    <span>.</span>
                    <input type="number" style={{marginRight: "70px"}} onChange={(e) => setTenths(e.target.value)} placeholder='s' max="9" min="0"/>
                    <button onClick={() => {
                        timer.start({startValues: {minutes: minute, seconds: second, secondTenths: tenths}})
                        timer.pause()
                    }}>SET</button>
                </>
                <>
                    <button onClick={() => timer.start()}>START</button>
                    <button onClick={() => timer.pause()}>STOP</button>
                    <button onClick={() => {
                        //User has to double click just in case its hit on accident
                        timer.start({minutes: 0, seconds: 0});
                        timer.stop()
                    }}>RESET</button>
                </>
            </div>
        </div>
    );
}
 
export default Timer;