import './App.css'

import Navbar from './Sections/Navbar'
import HeroSection from './Sections/HeroSection'
import NewsSection from './Sections/NewsSection'
import Testing from "./Components/Example"
import Tap from "./Sections/TapSection"
function App() {

  return (
    <>
   <HeroSection/>
   <Navbar/>
   <Tap/>
   {/* <NewsSection></NewsSection> */}
    </>
  )
}

export default App
