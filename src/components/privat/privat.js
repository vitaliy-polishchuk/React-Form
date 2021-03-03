import React from 'react';
import './privat.css'
import InputNumber from "../privat2/privat2";
import App2 from "../privat3/privat3";
import {NavLink} from "react-router-dom";

const Privat = () => {
  return(
      <div className='Privat bg-info p-5'>
        <InputNumber/>
        <App2/>
      </div>
  )
}
export default Privat
