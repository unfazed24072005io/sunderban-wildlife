"use client";

import { motion } from "framer-motion";
import { Clock, Users, MapPin, Star } from "lucide-react";

interface TourCardProps {
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  location: string;
  rating: number;
  price: number;
  image: string;
}

const TourCard = ({
  title,
  description,
  duration,
  groupSize,
  location,
  rating,
  price,
  image,
}: TourCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
            <Star size={16} className="mr-1" />
            <span className="font-bold">{rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-700">
            <Clock size={18} className="mr-2 text-green-600" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Users size={18} className="mr-2 text-green-600" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center text-gray-700 col-span-2">
            <MapPin size={18} className="mr-2 text-green-600" />
            <span>{location}</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center pt-4 border-t">
          <div>
            <span className="text-sm text-gray-500">Starting from</span>
            <p className="text-2xl font-bold text-green-700">₹{price}</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;