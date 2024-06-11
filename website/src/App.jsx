import { useState } from 'react'
import './App.css'
import Home from './Home'
import Services from './Services'
import Customers from './Customers'
import Feature from './Feature'
import Information from './Information';
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Home></Home>
    <Services></Services>
    <Customers></Customers>
    <Feature></Feature>
    <Information></Information>
    <Footer></Footer>
    </>
  )
}

export default App
