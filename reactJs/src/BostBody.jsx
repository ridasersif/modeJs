import { useParams } from "react-router-dom"
import { useContext } from "react"
import { postsContext } from "./contexts/PostContext"
export default function BostBody({titile,body}){
    const posts=useContext(postsContext)
      const {id}=useParams()
    console.log(id)
    const post =posts.find((p)=>{
        return p.id==id
    })
    console.log(post)
  
    return(
        <>
            <h1>Post list page </h1>
            <h3>{post.title}</h3>
            <b>{post.body}</b>
        </>
    )
}