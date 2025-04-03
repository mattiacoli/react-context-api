
import { useContext } from "react"
import PostContext from "../contexts/PostContext"

export default function PostList() {

  const { posts } = useContext(PostContext)

  return (

    <>
      <section>

        <div className="row">
          {posts.map(post => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card h-100 d-flex" style={{ minHeight: '350px' }}>
                <img className="card-img-top" src={`http://localhost:3000/${post.image}`} alt={post.title} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h4 className="card-title mb-4 ">{post.title}</h4>

                </div>
              </div>
            </div>
          ))}

        </div>

      </section>
    </>
  )
}