import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <>
     <div className=" bg-red-300 text-white  min-h-screen px-6 py-4 flex flex-col gap-10   md:px-10 md:py-7 md:justify-between  md:flex md:flex-col lg:px-16 lg:py-10">
     <Header />
     <Body />
     <Footer />
     </div>
    </>
  )
}

export default App
