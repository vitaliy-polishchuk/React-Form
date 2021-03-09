import React from 'react';
import s from './topHeader.module.css'
import {NavLink} from "react-router-dom";
import ModalApp from "../modal/modal";


const TopHeader = (props) => {
    return <div className={s.component_header}>
        <div className={s.img}>

            <div className='navbar navbar-expand-lg navbar-light '>

                <div><NavLink className='text-light text-decoration-none px-3 border-right' to='/'>React</NavLink>
                </div>
                <div><NavLink className='text-light text-decoration-none px-3 border-right' to='regis'>Sign Up</NavLink>
                </div>
                <div><NavLink className='text-light text-decoration-none px-3 border-right' to='login'>Sign In</NavLink>
                </div>
                <div><NavLink className='text-light text-decoration-none px-3 border-right' to='api'>Hooks API</NavLink>
                </div>
                <div><NavLink className='text-light text-decoration-none px-3 border-right' to='test'>Test
                    link</NavLink></div>
                <div><NavLink className='text-light text-decoration-none px-3 border-right' to='photos'>Photos</NavLink>
                </div>
                <div><NavLink className='text-danger  text-decoration-none px-3 border-right' to='login'>Private
                    Page</NavLink>
                </div>

                <div className='px-3'><ModalApp/></div>
            </div>

            <div className='display-4 text-white-50 text-center my-5'>REACT</div>
        </div>


    </div>;
}

export default TopHeader;
