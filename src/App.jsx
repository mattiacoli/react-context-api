import { useState } from "react"
import PostPage from "./pages/PostPages"
import { useEffect } from "react"


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })

  }, [])


  return (
    <>
      <PostPage posts={posts} />


    </>
  )
}

export default App
