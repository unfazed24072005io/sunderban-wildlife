"use client";

import { useState } from "react";
import { Search, Filter, X, ZoomIn, Download, Share2, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Photos", count: 48 },
    { id: "tigers", label: "Royal Bengal Tigers", count: 12 },
    { id: "birds", label: "Bird Species", count: 18 },
    { id: "landscape", label: "Landscape", count: 8 },
    { id: "mangroves", label: "Mangroves", count: 6 },
    { id: "culture", label: "Local Culture", count: 4 },
  ];

  // Gallery images data
  const galleryImages = [
    // Tigers
    { id: 1, category: "tigers", title: "Royal Bengal Tiger Swimming", 
      image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070&auto=format&fit=crop",
      description: "Tiger swimming between islands in the mangrove creeks",
      tags: ["tiger", "wildlife", "swimming"], likes: 245, date: "2024-01-15" },
    
    { id: 2, category: "tigers", title: "Tiger on Patrol", 
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop",
      description: "Male tiger marking territory in the mangrove forest",
      tags: ["tiger", "predator", "territory"], likes: 189, date: "2024-02-03" },
    
    { id: 3, category: "tigers", title: "Cub Playing", 
      image: "https://images.unsplash.com/photo-1562552476-8ac4a2d1d6a0?q=80&w=2065&auto=format&fit=crop",
      description: "Young tiger cub playing near water edge",
      tags: ["cub", "young", "playful"], likes: 312, date: "2023-12-20" },
    
    // Birds
    { id: 4, category: "birds", title: "White-bellied Sea Eagle", 
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=2070&auto=format&fit=crop",
      description: "Majestic sea eagle perched on mangrove branch",
      tags: ["eagle", "bird of prey", "perched"], likes: 167, date: "2024-01-28" },
    
    { id: 5, category: "birds", title: "Kingfisher in Action", 
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=2050&auto=format&fit=crop",
      description: "Common kingfisher diving for fish",
      tags: ["kingfisher", "action", "hunting"], likes: 198, date: "2024-02-10" },
    
    { id: 6, category: "birds", title: "Migratory Flock", 
      image: "https://images.unsplash.com/photo-1444464666168-49d633b867af?q=80&w=2069&auto=format&fit=crop",
      description: "Thousands of migratory birds at Sajnekhali",
      tags: ["flock", "migration", "spectacle"], likes: 156, date: "2023-11-15" },
    
    // Landscape
    { id: 7, category: "landscape", title: "Sunrise Over Mangroves", 
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2075&auto=format&fit=crop",
      description: "Golden hour sunrise illuminating the mangrove canopy",
      tags: ["sunrise", "golden hour", "canopy"], likes: 278, date: "2024-01-05" },
    
    { id: 8, category: "landscape", title: "Misty Mangrove Creeks", 
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      description: "Early morning mist over narrow mangrove creeks",
      tags: ["mist", "morning", "creeks"], likes: 231, date: "2023-12-12" },
    
    { id: 9, category: "landscape", title: "Full Moon Over Sunderban", 
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop",
      description: "Moonrise over the mangrove forest at night",
      tags: ["moon", "night", "silhouette"], likes: 189, date: "2024-01-20" },
    
    // Mangroves
    { id: 10, category: "mangroves", title: "Sundari Tree Roots", 
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
      description: "Intricate breathing roots of Sundari trees",
      tags: ["roots", "sundari", "unique"], likes: 145, date: "2024-02-01" },
    
    { id: 11, category: "mangroves", title: "Mangrove Forest Aerial", 
      image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop",
      description: "Drone view of the vast mangrove ecosystem",
      tags: ["aerial", "drone", "vast"], likes: 267, date: "2023-11-30" },
    
    // Culture
    { id: 12, category: "culture", title: "Honey Collector", 
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop",
      description: "Local Mowali community member collecting honey",
      tags: ["honey", "community", "traditional"], likes: 178, date: "2024-01-08" },
    
    { id: 13, category: "culture", title: "Fishing Nets", 
      image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2070&auto=format&fit=crop",
      description: "Traditional fishing methods in the creeks",
      tags: ["fishing", "traditional", "livelihood"], likes: 123, date: "2023-12-25" },
    
    { id: 14, category: "tigers", title: "Tiger Drinking Water", 
      image: "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=2069&auto=format&fit=crop",
      description: "Tiger quenching thirst at freshwater pond",
      tags: ["tiger", "drinking", "water"], likes: 256, date: "2024-02-12" },
    
    { id: 15, category: "birds", title: "Heron in Flight", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      description: "Purple heron taking off from water surface",
      tags: ["heron", "flight", "elegant"], likes: 134, date: "2024-01-18" },
    
    { id: 16, category: "landscape", title: "Rainy Season", 
      image: "https://images.unsplash.com/photo-1594717523698-fb6c24d1c174?q=80&w=2070&auto=format&fit=crop",
      description: "Monsoon rains over the mangrove forest",
      tags: ["rain", "monsoon", "wet"], likes: 167, date: "2023-07-22" },
  ];

  // Filter images based on category and search
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getSelectedImage = () => {
    return galleryImages.find(img => img.id === selectedImage);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `sunderban-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-900 to-emerald-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
            alt="Gallery Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sunderban Gallery
            </h1>
            <p className="text-green-100 text-xl">
              Visual journey through the world's largest mangrove forest
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Camera size={20} className="text-white mr-2" />
                <span className="text-white font-medium">{galleryImages.length}+ Photos</span>
              </div>
              <div className="text-white/80">
                • Professional Wildlife Photography
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-full lg:w-auto lg:flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search photos by title, description, or tags..."
                className="w-full pl-12 pr-10 py-3 border-2 border-green-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              <div className="flex items-center">
                <Filter size={20} className="text-green-600 mr-2" />
                <span className="font-medium text-gray-700">Filter by:</span>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-green-100 text-green-800 hover:bg-green-200"
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 text-sm opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters Button */}
            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={clearFilters}
                className="flex items-center text-gray-600 hover:text-gray-800 whitespace-nowrap"
              >
                <X size={18} className="mr-1" />
                Clear Filters
              </button>
            )}
          </div>

          {/* Active Filters Display */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-gray-600">
              Showing {filteredImages.length} of {galleryImages.length} photos
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Click to view full size</span>
              <ZoomIn size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold rounded-full">
                      {categories.find(c => c.id === image.category)?.label}
                    </span>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 p-2 rounded-full">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Info Footer */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-gray-800 line-clamp-1">{image.title}</h3>
                    <div className="flex items-center text-gray-500">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                      <span className="text-sm font-medium">{image.likes}</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {image.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // No Results Found
          <div className="text-center py-20">
            <div className="text-gray-400 mb-6">
              <Camera size={80} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              No photos found
            </h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Show All Photos
            </button>
          </div>
        )}

        {/* Photography Tips */}
        
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {getSelectedImage() && (
                <>
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={getSelectedImage()!.image}
                      alt={getSelectedImage()!.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    
                    {/* Controls */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        onClick={() => handleDownload(getSelectedImage()!.image, getSelectedImage()!.title)}
                        className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
                        title="Download"
                      >
                        <Download size={20} />
                      </button>
                      <button
                        className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
                        title="Share"
                      >
                        <Share2 size={20} />
                      </button>
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
                        title="Close"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Info Panel */}
                  <div className="bg-white rounded-2xl mt-4 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{getSelectedImage()!.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {new Date(getSelectedImage()!.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700">{getSelectedImage()!.likes}</div>
                          <div className="text-gray-500 text-sm">Likes</div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{getSelectedImage()!.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {getSelectedImage()!.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-gray-500 text-sm">
                      Category: {categories.find(c => c.id === getSelectedImage()!.category)?.label}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;