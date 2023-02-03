import React from 'react'
import BlogItem from './BlogItem';
import './BlogItem.css'
import {blogList} from '../blogdata';



function Blog() {
  return (
      <>
        <div className="container my-3">
          <div className="row mx-1 test" style={{marginTop:'60px'}}>
                        {blogList.map((element) => {
                            return <BlogItem title={element.title} description={element.description} imageUrl={element.urlToImage}/>
                        })}
                    </div>

        </div>
      </>
  )
}

export default Blog
