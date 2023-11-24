import { NavBar } from "./pages/NavBar"
import { useHash } from "./hooks/useHash"
import { Home } from "./pages/Home"

function App() {

  const [page, params] = useHash()
  const content = getContent(page)

  return (
    <div className="container">
      <NavBar />
      {content}
    </div>
  )

}

function getContent(page) {


  switch (page) {
    case '':
      return <Home />
    case 'contact':
      return 'contact'
    default:
      return '404 not found'
  }
}

export default App
