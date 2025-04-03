
import { useContext } from "react"
import PostContext from "../contexts/PostContext"
import PostCard from "./PostCard"

export default function PostList() {

  const { posts } = useContext(PostContext)

  return (

    <>
      <section>

        <div className="row">
          {posts.map(post => (
            <PostCard post={post} key={post.id} />
          ))}

        </div>

      </section>
    </>
  )
}