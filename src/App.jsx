

import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Players from './components/Players'

function App() {
 

  return (
    <>
      <div className='w-[90%] mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Players></Players>
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
