import React from 'react'
import ProductCard from './ProductCard'
import Image from 'next/image'


const newProductData=[
  
  {
    img:"/redshirt.jpg",
    title:"Smart Shirt Piece",
    desc:"Pure Fabric Lawn Shirt Piece",
    rating: 4,
    price:"Rs-2500"
  },
  {
    img:"/overcoat3.jpg",
    title:"Ladies Over Coat",
    desc:"Pure Fabric Red Overcoat",
    rating: 3,
    price:"Rs-4500"
  },
  {
    img:"/glasses2.jpg",
    title:"Stylish Glasses",
    desc:"Smart Blue Glasses ",
    rating: 3,
    price:"Rs-4500"
  },
   

  {
    img:"/pinkheel.jpg",
    title:"Pink Heels",
    desc:"Stylish FootWear",
    rating: 4,
    price:"Rs-3000"
  }, 
  {
    img:"/menwatch.jpg",
    title:"Men Watch",
    desc:"Stylish Watch for Men",
    rating: 4,
    price:"Rs-4500"
  }, 
  {
    img:"/jogger.jpg",
    title:"Men Wear",
    desc:"Comfortable Men Joggers ",
    rating: 4,
    price:"Rs-5000"
  },
  
  {
    img:"/hat.webp",
    title:"Ladies Hat",
    desc:"Stylish & Smart Hat",
    rating: 4,
    price:"Rs-1000"
  },  
  {
    img:"/watch1.jpg",
    title:"Ladies Watch",
    desc:"stylish and Smart Watch",
    rating: 5,
    price:"Rs-2500"
  }, 
   
   
  {
    img:"/brown1.jpg",
    title:"Ladies FootWear",
    desc:"Comfortable Footwear",
    rating: 3,
    price:"Rs-2500"
  }, 
    
  {
    img:"/purse1.webp",
    title:"Gucci HandBag",
    desc:"Best Leather Hand Carry",
    rating: 3,
    price:"Rs-3500"
  },  
  {
    img:"/purse2.webp",
    title:"Gucci HandBag",
    desc:"Stylish hand carry",
    rating: 3,
    price:"Rs-3000"
  }, 
   {
    img:"/jogger1.jpg",
    title:"Women Wear",
    desc:"Comfortable Women Joggers ",
    rating: 4,
    price:"Rs-5000"
  },
  {
    img:"/cap.jpg",
    title:"Men Cap",
    desc:"Pure Fabric cap",
    rating: 2,
    price:"Rs-500"
  },
  {
    img:"/kurti4.jpg",
    title:"Embrioded Shirt",
    desc:"Pure Fabric Lawn Shirt Piece",
    rating: 3,
    price:"Rs-2000"
  },
  {
    img:"/blackshirt.webp",
    title:"Printed Black Shirt",
    desc:"Pure Fabric Lawn Shirt Piece",
    rating: 3,
    price:"Rs-2200"
  },
  {
    img:"/suit7.jpg",
    title:"Printed White Shirt",
    desc:"Pure Fabric Lawn Shirt Piece",
    rating: 3,
    price:"Rs-2200"
  },
  
]

const NewProducts = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-bold text-4xl pb-4 text-center mt-7 mb-3'>New Products</h2>
        
        
        <div className='grid grid-cols-1 place-items-center sm:place-items-start 
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {newProductData.map((item,index)=>(
            <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts