import Header from './Components/Header/Header'
import Herosection from './Components/Herosection/Herosection'
import Icon from './Components/Iconssection/Icon'
import Resedencies from './Components/Resedencies/Resedencies'
import Value from './Components/ValueSection/Value'
import Contact from './Components/Contact/Contact'
import Getstarted from './Components/Getstarted/Getstarted'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {


  return (
    <>
      <div className='bg-black'>
      <Header/>
      <Herosection/>
      </div>
      <Icon/>
      <Resedencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
      
    </>
  )
}

export default App
