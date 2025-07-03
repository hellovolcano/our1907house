import '../post.css'
import { useState } from 'react'


const Post = (props) => {
    const [posts] = useState([props])

    return (
        <div>
            {posts.map((post) => (
                <div>
                    <div class="post-title-block">
                        <h1>{post.postTitle}</h1>
                        <p class="post-summary" hidden="true">{post.postSummary}</p>
                    </div>
                    {/* Image */}
                    <div class="featured-image">
                        <img src={post.featuredImage} alt={post.postSummary} />
                    </div>
                    <div class="post-body">
                        <p>{post.postBody}</p>
                    </div>
                </div>

            ))}
        
        </div>
    )

}
export default Post
