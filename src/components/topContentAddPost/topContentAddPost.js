import React from 'react';
import s from './topContentAddPost.module.css'
import {Formik, Form, Field} from "formik";


const TopContentAddPost = (props) => {


    return <div className="component-top-content-add-post">
        <div className={s.container}>
            <h3 className={s.titlePost}>Add a Post to the React Blog</h3>
            <Formik initialValues={{title: "", author: "", text: "", url: ""}}
                    onSubmit={values => props.parentCallback(values)}>
                <Form>
                    <label className={s.label}>Post Title </label>
                    <Field name='title' className={s.inp} placeholder="Post Title" required/>


                    <label className={s.label}>Author Name </label>
                    <Field name='author' className={s.inp} placeholder="Full Name" required/>

                    <label className={s.label}>Post Body</label>
                    <Field component='textarea' name='text' className={s.textarea} placeholder="Write your post here"
                           required/>


                    <label className={s.label}>Image URL - <span
                        className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span></label>
                    <Field name='url' className={s.inp_url} type="url"
                           placeholder="The URL of the featured image for your post" required/>

                    <button type="submit" className="btnSubmit d-block">Add Post</button>
                </Form>
            </Formik>
        </div>


    </div>;
}
export default TopContentAddPost;
