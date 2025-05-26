import React from 'react'
import properties from '../properties'

const FeaturedProperties = () => {
  return (
    <section className='max-w-7xl mx-auto py-16 px-4'>
      <h2 className='text-3xl font-bold mb-8'>Featured Properties</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties.map((property) => (
          <div key={property.id}
          className='bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-500 relative group cursor-pointer'>
            <div className="relative">
              <img src={property.image} alt="" className='w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300 '/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProperties