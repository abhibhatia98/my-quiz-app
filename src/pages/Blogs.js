import React from 'react'
import BlogItem from './BlogItem';
import { blogList } from '../blogdata';



function Blog() {
  return (
    <>
      <div className="container my-3" style={{ padding: '0' }}>
        <div className="row mx-1" style={{ marginTop: '60px' }}>
          {blogList.map((element) => {
            return <BlogItem title={element.title} description={element.description} imageUrl={element.urlToImage} />
          })}
        </div>

      </div>
    </>
  )
}

export default Blog
