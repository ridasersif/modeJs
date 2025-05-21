import { Link } from "react-router-dom"

import { postsContext } from "./contexts/PostContext"
import { useContext } from "react"

export default function Bosts(){
    const posts=useContext(postsContext)
    let postsList=posts.map((post)=>{
        return(
            <Link key={post.id} to={`/postbody/${post.id}`}>

                <div >
                    <h2>{post.title}</h2>
                </div>
            </Link>
        )

    })

    return(
      <div >
        {postsList}
      </div>
    )
}