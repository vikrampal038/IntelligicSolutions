import react from 'react'
import MainRouter from './appRouter/MainRouter'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import "react-phone-input-2/lib/style.css";


const App = () => {
  return (
    <div className='flex flex-col w-full justify-center items-cente'>
      <Navbar />
      <div className='flex flex-col w-full'>
      <MainRouter />
      </div>
      <Footer />
    </div>
  )
}

export default App
