"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const BlogCard = ({
  title,
  excerpt,
  author,
  date,
  category,
  readTime,
  image,
  slug,
}: BlogCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="relative -mt-8 ml-4">
          <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            {author}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{excerpt}</p>

        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-gray-500 text-sm">{readTime} read</span>
          // In BlogCard.tsx, update the Link component:
<Link
  href={`/blog/${slug}`}  // This should match your dynamic route
  className="flex items-center text-green-600 hover:text-green-700 font-medium"
>
  Read More
  <ArrowRight size={18} className="ml-2" />
</Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;