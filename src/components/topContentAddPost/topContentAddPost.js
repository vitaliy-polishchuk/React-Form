import React, {useState} from 'react';
import s from './topContentAddPost.module.css'

const TopContentAddPost = (props) => {

    const [post, setPost] = useState([])

    const createPost = () => {
        setPost(post)
        console.log(post)
    }
    const handleChange = (e) =>{
        setPost(e.value)
    }

    return <div className="component-top-content-add-post">
        <div className={s.container}>
            <h3 className={s.titlePost}>Add a Post to the React Blog</h3>
            <form>
                <label className={s.label}>Post Title </label>
                <input value={post.title} className={s.inp} onChange={handleChange} placeholder="Post Title" required/>


                <label className={s.label}>Author Name </label>
                <input value={post.name} className={s.inp} placeholder="Full Name" required/>

                <label>Post Body</label>
                <textarea placeholder="Write your post here" required/>


                <label>Image URL - <span
                    className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span></label>
                <input className='' type="url" placeholder="The URL of the featured image for your post" required/>

                <button onClick={createPost} type="submit" className="btnSubmit">Add Post</button>
            </form>
        </div>


    </div>;
}
export default TopContentAddPost;
