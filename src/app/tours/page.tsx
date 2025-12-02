"use client";

import { useState, useEffect } from "react";
import TourCard from "@/components/TourCard";
import { Search, Filter, X } from "lucide-react";

// Tour data
const allTours = [
  {
    id: 1,
    title: "Royal Bengal Tiger Safari",
    description: "3-day guided safari to spot the majestic Royal Bengal Tiger in their natural habitat.",
    duration: "3 Days",
    durationValue: 3,
    groupSize: "6-8 People",
    location: "Sajnekhali, Sunderban",
    rating: 4.8,
    price: 12500,
    image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070&auto=format&fit=crop",
    tags: ["tiger", "safari", "wildlife"],
  },
  {
    id: 2,
    title: "Bird Watching Expedition",
    description: "Explore diverse avian species in the mangrove forests with expert ornithologists.",
    duration: "2 Days",
    durationValue: 2,
    groupSize: "4-6 People",
    location: "Sudhanyakhali",
    rating: 4.6,
    price: 8500,
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=2070&auto=format&fit=crop",
    tags: ["birds", "photography", "nature"],
  },
  {
    id: 3,
    title: "Mangrove Forest Cruise",
    description: "Peaceful boat cruise through narrow creeks and dense mangrove forests.",
    duration: "1 Day",
    durationValue: 1,
    groupSize: "8-10 People",
    location: "Netidhopani",
    rating: 4.7,
    price: 5500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    tags: ["cruise", "relaxing", "scenic"],
  },
  {
    id: 4,
    title: "Cultural Village Tour",
    description: "Experience local culture, honey collection, and traditional fishing methods.",
    duration: "2 Days",
    durationValue: 2,
    groupSize: "6-8 People",
    location: "Sunderban Villages",
    rating: 4.5,
    price: 7500,
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop",
    tags: ["culture", "village", "local"],
  },
  {
    id: 5,
    title: "Photography Tour",
    description: "Special tour for photography enthusiasts with golden hour shoots.",
    duration: "4 Days",
    durationValue: 4,
    groupSize: "4-6 People",
    location: "Multiple Locations",
    rating: 4.9,
    price: 18500,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2075&auto=format&fit=crop",
    tags: ["photography", "premium", "scenic"],
  },
  {
    id: 6,
    title: "Night Safari Adventure",
    description: "Unique night safari to witness nocturnal wildlife in the mangroves.",
    duration: "2 Days",
    durationValue: 2,
    groupSize: "4-6 People",
    location: "Burirdabri",
    rating: 4.8,
    price: 12000,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    tags: ["night", "adventure", "wildlife"],
  },
];

const ToursPage = () => {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [durationFilter, setDurationFilter] = useState("all");
  const [priceRange, setPriceRange] = useState(30000);
  const [filteredTours, setFilteredTours] = useState(allTours);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Filter tours based on search and filters
  useEffect(() => {
    let result = allTours;

    // Search by title, description, or tags
    if (searchQuery.trim() !== "") {
      result = result.filter(tour =>
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by duration
    if (durationFilter !== "all") {
      if (durationFilter === "1") {
        result = result.filter(tour => tour.durationValue === 1);
      } else if (durationFilter === "2-3") {
        result = result.filter(tour => tour.durationValue >= 2 && tour.durationValue <= 3);
      } else if (durationFilter === "4+") {
        result = result.filter(tour => tour.durationValue >= 4);
      }
    }

    // Filter by price
    result = result.filter(tour => tour.price <= priceRange);

    setFilteredTours(result);
  }, [searchQuery, durationFilter, priceRange]);

  // Handle filter tags
  const popularFilters = ["tiger", "birds", "photography", "culture", "adventure"];

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setDurationFilter("all");
    setPriceRange(30000);
    setActiveFilters([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-64 bg-green-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: "url(https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070&auto=format&fit=crop)"}}
        />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sunderban Tour Packages
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Choose from our carefully curated wildlife experiences
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 -mt-8 mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tours by name, description, or tags (e.g., tiger, birds, photography)..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
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

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Duration Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
              >
                <option value="all">All Durations</option>
                <option value="1">1 Day</option>
                <option value="2-3">2-3 Days</option>
                <option value="4+">4+ Days</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price: ₹{priceRange.toLocaleString()}
              </label>
              <input
                type="range"
                min="1000"
                max="30000"
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>₹1,000</span>
                <span>₹30,000</span>
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                onClick={clearAllFilters}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
              >
                <X size={18} className="mr-2" />
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quick Filters
            </label>
            <div className="flex flex-wrap gap-2">
              {popularFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeFilters.includes(filter)
                      ? "bg-green-600 text-white"
                      : "bg-green-100 text-green-800 hover:bg-green-200"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilters.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">Active filters:</span>
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                >
                  {filter}
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="hover:text-green-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredTours.length} of {allTours.length} tours
            </p>
            {filteredTours.length === 0 && (
              <button
                onClick={clearAllFilters}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Clear filters to see all tours
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="container mx-auto px-4 pb-16">
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No tours found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={clearAllFilters}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Show All Tours
            </button>
          </div>
        )}

        {/* Booking Info */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 mb-6">
            Our wildlife experts are available to help you select the perfect tour.
            Contact us for personalized recommendations.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;