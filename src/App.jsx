import Home from './components/Home'
import Footer from './components/Footer'
import PropertyModal from './components/PropertyModal'
import Contact from './components/Contact'
import FeaturedProperties from './components/FeaturedProperties'

import './App.css'

function App() {

  return (
    <>
      <div className='min-h-screen w-full bg-gray-50'>
        <Home />

        <FeaturedProperties />

        <Contact />

        <Footer />
      </div>
    </>
  )
}

export default App
