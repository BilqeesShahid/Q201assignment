import Image from 'next/image'
import React from 'react'


const Testimonial = () => {
  return (
    <div>
      <div className='container pt-16 pb-16 grid-cols-2'>
        <h2 className='font-medium text-2xl pb-4'>Testimonials</h2>
        <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
          <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
          
            <div className='text-center flex flex-col items-center gap-1'>
              <Image 
              className='rounded-full inline-block'
              src="/testi.jpg"
              width={80}
              height={80}
              alt="dp"/>
              <h2 className='text-gray-500 font-black text-[20px]'>Bilqees Shahid</h2>
              <p>CEO and Founder Invision</p>
              <Image className='inline-block py-2'
              src="/quotes.jpg"
              width={30}
              height={30}
              alt="quotes"/>
              <p className='max-w-[200px] text-gray-500'>
              The best shopping experience I have had in years! The quality of the clothes is top-notch and shipping was super fast.
              </p>
            </div>
          </div>
          <div className='bg-red-600 bg-[url(/testimonial.jpg)] bg-cover h-[500px] 
          rounded-2xl grid place-items-center'>
            <div className='bg-white-200 min-w-[270px] sm:min-w-[300px]
             md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
              <button className='bg-black text-white p-2 rounded-md'>
                25% Discount
              </button>
              <h2 className='font-extrabold text-2xl text-black'>Summer Collection</h2>
              <p className='text-gray-500 text-[20px]'>starting @300<b>Shop Now</b></p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial
