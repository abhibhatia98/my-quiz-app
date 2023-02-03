import React from 'react'


const BlogItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <>
            <div className="card col-md-4 my-3" style={{ borderRadius: '4%' }}>
                <div className='container blog-thumbnail' style={{ padding: '0' }}>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ paddingTop: '10px' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.length > 150 ? description.substring(0, 180) + " ..." : description}</p>
                    <a href="/" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )

}

export default BlogItem
