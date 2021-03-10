import React from 'react';
import s from "../topContent/topContent.module.css";
import {dateNow} from './index'

const CreatePost = ({data}) => {


    return <div className="component-create-post">
        {data.map(post => (
            <div className={s.container}>
                <div className='d-flex flex-row justify-content-between py-3'>
                    <div className='h3 px-2'>{post.title}</div>
                    <div className='text-black-50 px-2 '>{dateNow()}</div>
                </div>
                <div>
                    <img className='border p-1' src={post.url} alt=""/>
                </div>
                <div className='my-4 px-2'>{post.text}
                </div>
                <div className={s.author}>Author: {post.author}</div>
            </div>
        ))}
    </div>;
}

export default CreatePost
