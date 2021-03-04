// import React, {useState} from 'react';
// import s from './topContentAddPost.module.css'
//
// const TopContentAddPost = (props) => {
//
//     const [post, setPost] = useState([])
// console.log(post)
//     const createPost = () => {
//         setPost(post)
//     }
//
//     return <div className="component-top-content-add-post">
//         <div className={s.container}>
//             <h3 className={s.titlePost}>Add a Post to the React Blog</h3>
//             <form>
//                 <label className='h5'>Post Title
//                     <input value={post.title} className={s.inp} type="text" placeholder="Post Title" required/>
//                 </label>
//
//                 <label className='h5'>Author Name
//                     <input value={post.name} type="text" placeholder="Full Name" required/>
//                 </label>
//
//                 <label>Post Body
//                     <textarea
//                         placeholder="Write your post here" required/>
//                 </label>
//
//                 <label>Image URL - <span className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span>
//                     <input className='' type="url" placeholder="The URL of the featured image for your post" required/>
//                 </label>
//                 <button onClick={createPost} type="submit" className="btnSubmit">Add Post</button>
//             </form>
//         </div>
//
//
//     </div>;
// }
// export default TopContentAddPost;
