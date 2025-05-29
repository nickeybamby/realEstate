import Home from './components/Home'
import Footer from './components/Footer'
import PropertyModal from './components/PropertyModal'
import Contact from './components/Contact'
import FeaturedProperties from './components/FeaturedProperties'
import './App.css'
import { useState } from 'react'

function App() {

  const [selectedProperty, setSelectedProperty] = useState(null);
  return (
    <>
      <div className='min-h-screen w-full bg-gray-50'>
        <Home />

        <FeaturedProperties setSelectedProperty={setSelectedProperty}/>

        <Contact />

        <Footer />

        {selectedProperty && (
          <PropertyModal properties={[selectedProperty]} onClose={() => setSelectedProperty(null)}/>
        )}
      </div>
    </>
  )
}

export default App
