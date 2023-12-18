import { Cards } from "./components/Cards"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <div className="bg-[#effafb] dark:bg-neutral-800 min-h-screen">
        <Header/>
        <Cards/>
      </div>
    </>
  )
}

export default App