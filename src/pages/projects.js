import Post from '../components/post.js'
import house from '../703logo_t.png'
import { useState } from 'react'

function Projects () {

    const [posts] = useState([
        {
            postTitle : "Office Upgrade",
            featuredImage : {house},
            postSummary : "When 70s wood paneling meets crumbling plaster ceiling, something needs to be done.",
            postBody : "Sample Body Text",
        }
    ])

    return(
        <section>
            <div class="header">
                <h1>Projects</h1>
                <p class="subtitle">Projects we've completed, and some future plans.</p>
            </div>
            <div class="posts">
                <Post props={posts} />
            </div>
        </section>
    )
}

export default Projects
