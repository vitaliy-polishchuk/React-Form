import React from 'react';
import s from './topContent.css'


const TopContent = (props) => {
  const dateNow =()=>{
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    const mon = month[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const result = mon + " " + day + ", " + year;

    return result;
  }
  return <div className="component-top-content">
   <div className={s.container} >
     <div className='d-flex flex-row justify-content-between py-3'>
     <div>FLUX FLACK</div>
     <div className='text-black-50 '>{dateNow()}</div>
     </div>
     <div className='my-2'><img className='border' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg" alt=""/></div>
     <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda atque blanditiis commodi excepturi facere in ipsa laudantium nesciunt nihil quaerat, quam qui reprehenderit saepe sed sint tenetur. Aliquid consequuntur dolorem dolores, doloribus fugiat laudantium minus molestiae nam officia placeat repellat ut veritatis? Aut excepturi exercitationem, id illo incidunt ipsa libero molestias placeat sed similique tempora tenetur totam voluptates. A ab accusantium blanditiis dolore dolores eligendi, iusto minima molestias nulla optio possimus quibusdam quo quod reiciendis sapiente sint tenetur vel.</div>
     <div>Author: Fred Armisen</div>
   </div>
  </div>;
}
export default TopContent
