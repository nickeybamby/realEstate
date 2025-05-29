import React, { useState } from 'react'

import { FaChevronLeft, FaChevronRight, FaX } from 'react-icons/fa6'

const PropertyModal = ({onClose, properties}) => {
 const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);

 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 if (!properties || properties.length === 0){
  return null;
 }

 const currentProperty = properties[currentPropertyIndex];
 const images = currentProperty.images || [];

 const nextImage = () => {
  setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
 }

 const prevImage = () => {
  setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1 ))
 }

  return (
    <div className='fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4' onClick={onClose}>
      <div className="relative bg-white rounded-3xl max-w-xl w-full md:max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>

        <div className='relative h-[300px] md:h-[400px]'>
          <img src={images[currentImageIndex]} alt="" 
          className='w-full h-full object-cover'/>

          <button onClick={prevImage} className='absolute left-4 top-1/2 -transparent-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white'>
            <FaChevronLeft size={20} />
          </button>
          
          <button onClick={nextImage} className='absolute right-4 top-1/2 -transparent-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white'>
            <FaChevronRight size={20} />
          </button>

          <button onClick={onClose} className='absolute text-white top-10 right-5 -translate-y-1/2 bg-red-500 p-2 rounded-full'>
            <FaX size={20}/>
          </button>
        </div>

      </div>
    </div>
  )
}

export default PropertyModal