import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Test = (props) => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    }, [count]);

    return (
        <div>
            <div className='home my-3 h3'><NavLink to=''>Home</NavLink></div>
            <p>Вы нажали {count} раз</p>
            <button className='text-success btn-dark shadow' onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>

        </div>
    );
}

export default Test
