import React, {useEffect, useState} from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
const Photos = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(r => r.json())
            .then(r => {
              setData(r)
              return r
            })
            .then(json => console.log(json))
            .catch(error => console.log(error))
    },[])


    return <div className="component-photos">
      <div className='headertop'><div className='home mx-4 my-3 h3'><NavLink to=''>Home</NavLink></div></div>
       <div className='border'>

         {data.map((item) =>
             // <div className='photos' key={item.id}>
             //   {item.title}
                <img className='img-thumbnail' src={item.url}/>
             // </div>
         )}
       </div>
    </div>;
}

export default Photos
