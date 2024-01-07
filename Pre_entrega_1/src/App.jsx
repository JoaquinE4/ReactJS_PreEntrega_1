
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Mensaje from './components/Mensaje'

function App() {


  return (
    <div  >
     
      <Header />
    
      <Banner />
      <hr />
      <Mensaje tamaño={460} />
      <hr />
      <Footer/>
    </div>
  )

}

export default App
