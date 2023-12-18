import { Cards } from "./components/Cards"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <div className="bg-[#effafb] min-h-screen">
        <Header/>
        <Cards/>
      </div>
    </>
  )
}

export default App