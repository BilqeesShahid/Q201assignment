import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
          <Link className='navbar_link relative' href="#">Home</Link>
          <Link className='navbar_link relative' href="#">Categories</Link>
          <Link className='navbar_link relative' href="#">Men</Link>
          <Link className='navbar_link relative' href="#">Women</Link>
          <Link className='navbar_link relative' href="#">Accessories</Link>
          <Link className='navbar_link relative' href="#">Clothing</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar 
