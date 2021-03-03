import React from 'react';
import s from './topContentAddPost.module.css'

const TopContentAddPost = (props) => {
    const createPost = () => {

    }

    return <div className="component-top-content-add-post">
        <div className=''>
            <h5>Add a Post to the React Blog</h5>
            <form className="input-group-lg" onSubmit={createPost}>
                <label>Post Title
                    <input className='form-control' type="text" placeholder="Post Title" required/>
                </label>
                <label>Author Name
                    <input className='form-control' type="text" placeholder="Full Name" required/>
                </label>
                <label>Post Body
                    <textarea
                        placeholder="Write your post here" required/>
                </label>
                <label>Image URL - <span className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span>
                    <input className='form-control' type="url" placeholder="The URL of the featured image for your post" required/>
                </label>
                <button type="submit" className="btnSubmit">Add Post</button>
            </form>
        </div>
    </div>;
}
export default TopContentAddPost;
