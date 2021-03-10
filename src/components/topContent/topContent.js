import React, {useState} from 'react';
import s from './topContent.module.css'
import TopContentAddPost from "../topContentAddPost";
import {dateNow} from "../createPost";
import CreatePost from "../createPost/createPost";


const TopContent = (props) => {
    const [posts, setPosts] = useState([]);


    return <div className="component-top-content">
        <div className={s.container}>
            <div className='d-flex flex-row justify-content-between py-3'>
                <div className='h3 px-2'>FLUX FLACK</div>
                <div className='text-black-50 px-2 '>{dateNow()}</div>
            </div>
            <div><img className='border p-1'
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg"
                      alt=""/></div>
            <div className='my-4 px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda
                atque
                blanditiis commodi excepturi facere in ipsa laudantium nesciunt nihil quaerat, quam qui reprehenderit
                saepe sed sint tenetur. Aliquid consequuntur dolorem dolores, doloribus fugiat laudantium minus
                molestiae nam officia placeat repellat ut veritatis? Aut excepturi exercitationem, id illo incidunt ipsa
                libero molestias placeat sed similique tempora tenetur totam voluptates. A ab accusantium blanditiis
                dolore dolores eligendi, iusto minima molestias nulla optio possimus quibusdam quo quod reiciendis
                sapiente sint tenetur vel.
            </div>
            <div className={s.author}>Author: Fred Armisen</div>

            <div className='d-flex flex-row justify-content-between py-3'>
                <div className='h3 px-2'>INLINE STYLES AREN'T NECESSARY</div>
                <div className='text-black-50 px-2 '>{dateNow()}</div>
            </div>
            <div><img className='border p-1'
                      src="https://c2.staticflickr.com/8/7432/9087815445_1a14743549_b.jpg"
                      alt=""/></div>
            <div className='my-4 px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda
                atque
                blanditiis commodi excepturi facere in ipsa laudantium nesciunt nihil quaerat, quam qui reprehenderit
                saepe sed sint tenetur. Aliquid consequuntur dolorem dolores, doloribus fugiat laudantium minus
                molestiae nam officia placeat repellat ut veritatis? Aut excepturi exercitationem, id illo incidunt ipsa
                libero molestias placeat sed similique tempora tenetur totam voluptates. A ab accusantium blanditiis
                dolore dolores eligendi, iusto minima molestias nulla optio possimus quibusdam quo quod reiciendis
                sapiente sint tenetur vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at
                ducimus enim, fugit iure maxime minima neque obcaecati quasi quisquam quos repellat sunt voluptatibus?
                Architecto earum id, magnam minima mollitia nam, officiis perferendis placeat qui reiciendis repellat
                sunt tempora? Commodi?
            </div>
            <div className={s.author}>Author: Amy Schumer</div>
            <CreatePost data={posts}/>
            <TopContentAddPost parentCallback={(newPost)=>setPosts([...posts, newPost])}/>
        </div>
    </div>;
}
export default TopContent
