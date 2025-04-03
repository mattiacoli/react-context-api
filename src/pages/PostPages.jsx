import PostList from "../components/PostList"

export default function PostPage({ posts }) {
  return (
    <>

      <h1 className="text-center my-3 fw-bolder">Post List</h1>

      <section>
        <div className="container">
          <PostList posts={posts} />
        </div>
      </section>



    </>
  )
}