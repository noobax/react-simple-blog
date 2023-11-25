import { NavBar } from "./pages/NavBar"
import { useHash } from "./hooks/useHash"
import { Home } from "./pages/Home"
import { Post } from "./pages/Post"

function App() {

  const [page, id] = useHash()
  const content = getContent(page, id)

  return (
    <div className="container">
      <NavBar />
      {content}
    </div>
  )

}

function getContent(page, id) {


  switch (page) {
    case '':
      return <Home />
    case 'contact':
      return 'contact'
    case 'post':
      return <Post id={id} />
    default:
      return '404 not found'
  }
}

export default App
