import React from 'react'
import properties from '../properties';
import { FaLocationDot } from 'react-icons/fa6'

const FeaturedProperties = () => {
  return (
    <section className='max-w-7xl mx-auto py-16 px-4'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Featured Properties</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties.map((property) => (
          <div key={property.id}
          className='bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-500 relative group cursor-pointer'>
            <div className="relative">
              <img src={property.image} alt="" className='w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300 '/>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <FaLocationDot className='text-blue-600'/>
                <span>{property.location}</span>
              </div>

              <div className="text-2xl font-bold text-blue-600 mb-2">
                {property.price}
              </div>

              <h3 className='text-xl font-semibold mb-4 text-gray-800'>{property.title}</h3>

              <div className='flex justify-between items-center p-3 bg-blue-50 rounded-lg'>

              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProperties