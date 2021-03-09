import React from 'react';
import s from "../topContent/topContent.module.css";
import {dateNow} from './index'

const CreatePost = (props) => {




  return <div className="component-create-post">
    {Object.keys(props.data).length ===  0 ? null : (
    <div className={s.container}>
      <div className='d-flex flex-row justify-content-between py-3'>
        <div className='h3 px-2'>{props.data.title}</div>
        <div className='text-black-50 px-2 '>{dateNow()}</div>
      </div>
      <div><img className='border p-1'
                src={props.data.url}
                alt=""/></div>
      <div className='my-4 px-2'>{props.data.text}
      </div>
      <div className={s.author}>Author: {props.data.author}</div>
    </div>

      )

    }
  </div>;
}

export default CreatePost
