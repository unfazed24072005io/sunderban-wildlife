import Hero from "@/components/Hero";
import TourCard from "@/components/TourCard";
import BlogCard from "@/components/BlogCard";
import { Search, Shield, Trees, Camera, Users, Star, ChevronRight, MapPin, Calendar } from "lucide-react";

export default function Home() {
  const featuredTours = [
    {
      title: "Royal Bengal Tiger Safari",
      description: "3-day guided safari to spot the majestic Royal Bengal Tiger in their natural mangrove habitat.",
      duration: "3 Days",
      groupSize: "6-8 People",
      location: "Sajnekhali, Sunderban",
      rating: 4.8,
      price: 12500,
      image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Bird Watching Expedition",
      description: "Explore 200+ avian species in the mangrove forests with expert ornithologists.",
      duration: "2 Days",
      groupSize: "4-6 People",
      location: "Sudhanyakhali",
      rating: 4.6,
      price: 8500,
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Mangrove Forest Cruise",
      description: "Peaceful boat cruise through narrow creeks and dense mangrove forests.",
      duration: "1 Day",
      groupSize: "8-10 People",
      location: "Netidhopani",
      rating: 4.7,
      price: 5500,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const featuredBlogs = [
    {
      title: "Best Time to Visit Sunderban National Park",
      excerpt: "Seasonal guide for optimal tiger sightings and comfortable weather in the mangrove forest.",
      author: "Amit Kumar",
      date: "Mar 5, 2024",
      category: "Travel Tips",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2075&auto=format&fit=crop",
      slug: "best-time-to-visit",
    },
    {
      title: "Tiger Conservation Efforts in Sunderban",
      excerpt: "Latest initiatives and success stories in protecting the Royal Bengal Tigers.",
      author: "Dr. Rajesh Sharma",
      date: "Feb 28, 2024",
      category: "Conservation",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop",
      slug: "tiger-conservation",
    },
  ];

  const features = [
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: "Safety First",
      description: "Experienced guides, emergency protocols, and fully equipped boats.",
      color: "bg-green-50",
    },
    {
      icon: <Trees className="text-green-600" size={32} />,
      title: "Eco-Friendly",
      description: "Sustainable tourism that protects the fragile mangrove ecosystem.",
      color: "bg-emerald-50",
    },
    {
      icon: <Camera className="text-green-600" size={32} />,
      title: "Photography Focus",
      description: "Special tours designed for wildlife photography enthusiasts.",
      color: "bg-teal-50",
    },
    {
      icon: <Users className="text-green-600" size={32} />,
      title: "Small Groups",
      description: "Intimate group sizes for better wildlife viewing experiences.",
      color: "bg-lime-50",
    },
  ];

  const stats = [
    { value: "400+", label: "Royal Bengal Tigers" },
    { value: "300+", label: "Bird Species" },
    { value: "10,000", label: "Sq. Km Mangrove" },
    { value: "50+", label: "Guided Tours" },
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Stats Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-green-300">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="container mx-auto px-4 -mt-8 mb-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-6xl mx-auto border border-green-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Find Your Perfect Wildlife Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
              <input
                type="text"
                placeholder="Search tours..."
                className="w-full pl-12 pr-4 py-3 border-2 border-green-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
              <select className="w-full pl-12 pr-4 py-3 border-2 border-green-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>Tour Duration</option>
                <option>1 Day</option>
                <option>2-3 Days</option>
                <option>4+ Days</option>
              </select>
            </div>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
              <select className="w-full pl-12 pr-4 py-3 border-2 border-green-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>Group Size</option>
                <option>Solo</option>
                <option>Small Group (2-6)</option>
                <option>Large Group (7+)</option>
              </select>
            </div>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
              <Search className="mr-2" size={20} />
              Search Tours
            </button>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-3">
            POPULAR PACKAGES
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Most Booked Wildlife Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated tours for unforgettable encounters with Sunderban's majestic wildlife
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour, index) => (
            <div key={index} className="relative group">
              <TourCard {...tour} />
              {index === 0 && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Best Seller
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/tours" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 text-green-700 hover:text-green-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-green-200"
          >
            View All Tour Packages
            <ChevronRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-green-50 to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-green-200 text-green-800 rounded-full text-sm font-semibold mb-3">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Experience Sunderban Like Never Before
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-green-100">
            <div className="flex items-center mb-6">
              <div className="text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="inline fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">5.0 Rating</span>
            </div>
            <p className="text-gray-700 text-lg italic mb-6">
              "The Sunderban Tiger Safari was a life-changing experience. Our guide's knowledge of the mangrove ecosystem was exceptional, and we were fortunate to spot a Royal Bengal Tiger on our second day!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold text-xl mr-4">
                SP
              </div>
              <div>
                <div className="font-bold text-gray-800">Sarah Peterson</div>
                <div className="text-gray-600">Wildlife Photographer, USA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
              LATEST INSIGHTS
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              From Our Wildlife Blog
            </h2>
            <p className="text-gray-600">
              Expert articles, conservation updates, and travel guides
            </p>
          </div>
          <a 
            href="/blog" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 text-blue-700 hover:text-blue-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-blue-200"
          >
            Read All Articles
            <ChevronRight className="ml-2" size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <MapPin className="text-green-600" size={24} />,
              title: "Best Viewing Spots",
              description: "Sajnekhali, Sudhanyakhali, Netidhopani",
              color: "border-l-4 border-green-500",
            },
            {
              icon: <Calendar className="text-green-600" size={24} />,
              title: "Ideal Season",
              description: "November to February for best weather",
              color: "border-l-4 border-emerald-500",
            },
            {
              icon: <Users className="text-green-600" size={24} />,
              title: "Group Sizes",
              description: "Small groups of 4-8 recommended",
              color: "border-l-4 border-teal-500",
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${item.color}`}
            >
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-lg font-bold text-gray-800 ml-3">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      {/* Final CTA Section */}
<section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
  <div className="relative container mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Ready for Your Wild Adventure?
    </h2>
    <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
      Book your Sunderban wildlife tour today and create memories that will last a lifetime
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white text-green-900 hover:bg-green-50 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
        Book Your Safari Now
      </button>
      <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300">
        Download Tour Guide PDF
      </button>
    </div>
    <p className="text-green-200 mt-8 text-sm">
      🐯 Spot Royal Bengal Tigers • 🐦 See 300+ Bird Species • 🌿 Explore Unique Mangroves
    </p>
  </div>
</section>
    </div>
  );
}