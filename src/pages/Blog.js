import React from 'react'
import { Link } from 'react-router-dom';
import { blogList } from '../blogdata';
import { useParams } from 'react-router';



function Blog() {
    const { id } = useParams();
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    return (
        <div className='container my-3' style={{ paddingTop: '50px', paddingLeft: '110px', width: '80%' }}>
            <h1 style={{ paddingTop: '50px' }}>{blog.title}</h1>
            <p style={{ paddingTop: '20px', color: 'rgba(0, 0, 0, 0.4)' }}>{blog.description}</p>
            <div className='d-flex-row-reverse' style={{ paddingLeft: '0%' }}>
                <p className='d-fill' style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bolder' }}>{blog.authorName}</p>
                <p className='d-fill' style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bolder', alignContent:'right' }}>21/06/2020</p>
            </div>
            <img src={blog.cover} style={{ width: '100%', height: '320px', alignItems: 'center', paddingTop: '10px' }} alt='cover' />
            <div className='container my-2'>
                <p className='blog-desc'>{blog.fullContent}</p>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Blog
