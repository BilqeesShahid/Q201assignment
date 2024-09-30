import Image from 'next/image';
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface PropsType {
  img: string;
  title: string;
  desc: string;
  rating: number; // Make sure the rating is passed as a number
  price: string;
}

const ProductCard: React.FC<PropsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    return (
      <div className="flex gap-1 text-[20px] text-orange-500">
        {Array.from({ length: 5 }).map((_, index) =>
          index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
        )}
      </div>
    );
  };

  return (
    <div className="border border-gray-300 rounded-xl max-w-[400px] shadow-lg p-4">
      <div className="overflow-hidden rounded-lg">
        <Image
          className="w-full h-auto object-cover"
          src={img}
          width={400} // Ensure uniform width
          height={400} // Set appropriate height for uniformity
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-[#eb394e] font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold text-lg">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
