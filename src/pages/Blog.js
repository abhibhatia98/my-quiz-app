import React from 'react'
import { Link } from 'react-router-dom';
import { blogList } from '../blogdata';
import { useParams } from 'react-router';



function Blog() {
    const { id } = useParams();
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    return ( 
        <div className='container my-3' style={{ paddingTop: '50px',paddingLeft:'110px', width:'80%'}}> 
            {/* <Link className='blog-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link> */}
            <h1 style={{paddingTop: '50px' }}>{blog.title}</h1>
            <p style={{paddingTop: '20px',color:'rgba(0, 0, 0, 0.4)'}}>{blog.description}</p>
            <img src={blog.cover} style={{ width: '80%', height: '300px', alignItems:'center',paddingTop:'30px' }} alt='cover' />
            <div className='container my-2'>
                <p className='blog-desc'>{blog.fullContent}</p>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Blog
