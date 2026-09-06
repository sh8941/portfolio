
import './App.css'
import Nav from './components/Nav'
import Introduction from './components/Introduction'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gray-100 text-2xl w-full h-fit'>
      <Nav />
      <Introduction />
      <About />
      <Footer/>
    </div>
  )
}

export default App
