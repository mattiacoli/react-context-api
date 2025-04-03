import { useState } from "react"
import PostPage from "./pages/PostPages"
import { useEffect } from "react"
import PostContext from "./contexts/PostContext"


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
      <PostContext.Provider value={{ posts: posts }}>
        <PostPage />
      </PostContext.Provider>
    </>
  )
}

export default App
