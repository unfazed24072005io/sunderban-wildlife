"use client";

import { useState } from "react";
import { PawPrint, Bird, Fish, Trees, Activity, Shield, AlertCircle, Info } from "lucide-react";

const WildlifePage = () => {
  const [activeTab, setActiveTab] = useState("animals");

  const animals = [
    {
      name: "Royal Bengal Tiger",
      scientific: "Panthera tigris tigris",
      description: "The apex predator of Sunderban, uniquely adapted to swim in saline mangrove waters. Known for their swimming ability between islands.",
      status: "Endangered",
      population: "~96",
      image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070&auto=format&fit=crop",
      icon: <PawPrint className="text-orange-500" size={24} />,
      features: ["Excellent swimmer", "Largest tiger subspecies", "Adapted to saline water"],
      threats: ["Habitat loss", "Human-wildlife conflict", "Climate change"],
    },
    {
      name: "Saltwater Crocodile",
      scientific: "Crocodylus porosus",
      description: "World's largest living reptile, found in Sunderban's brackish waters. Can grow up to 7 meters in length.",
      status: "Least Concern",
      population: "~200",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop",
      icon: <Activity className="text-green-600" size={24} />,
      features: ["Largest crocodile species", "Can survive in saltwater", "Powerful bite force"],
      threats: ["Illegal hunting", "Habitat destruction", "Pollution"],
    },
    {
      name: "Ganges River Dolphin",
      scientific: "Platanista gangetica",
      description: "Blind freshwater dolphin that uses echolocation to navigate murky waters. National Aquatic Animal of India.",
      status: "Endangered",
      population: "~300",
      image: "https://images.unsplash.com/photo-1551415923-a2291c1b22ee?q=80&w=2069&auto=format&fit=crop",
      icon: <Fish className="text-blue-500" size={24} />,
      features: ["Functionally blind", "Uses echolocation", "Freshwater species"],
      threats: ["Bycatch in fishing nets", "Water pollution", "Dam construction"],
    },
    {
      name: "Olive Ridley Turtle",
      scientific: "Lepidochelys olivacea",
      description: "Migrates to Sunderban coasts for mass nesting (arribada) during winter months.",
      status: "Vulnerable",
      population: "Seasonal",
      image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?q=80&w=2030&auto=format&fit=crop",
      icon: <Shield className="text-green-700" size={24} />,
      features: ["Mass nesting behavior", "Omnivorous diet", "Migratory species"],
      threats: ["Egg collection", "Beach erosion", "Artificial lighting"],
    },
  ];

  const birds = [
    "White-bellied Sea Eagle",
    "Brown-winged Kingfisher",
    "Mangrove Pitta",
    "Lesser Adjutant Stork",
    "Osprey",
    "Black-capped Kingfisher",
    "Purple Heron",
    "Brahminy Kite",
    "Pacific Golden Plover",
    "Sandpiper",
    "Egret",
    "Cormorant",
  ];

  const mangroveSpecies = [
    {
      name: "Sundari Tree",
      scientific: "Heritiera fomes",
      description: "Dominant mangrove species, giving Sunderban its name ('Beautiful Forest' in Bengali).",
      features: ["Salt-tolerant", "Pneumatophores (breathing roots)", "Durable timber"],
      height: "15-25 meters",
    },
    {
      name: "Goran",
      scientific: "Ceriops decandra",
      description: "Forms dense thickets in higher saline areas, important for soil stabilization.",
      features: ["Prop roots", "Medicinal properties", "Fire-resistant"],
      height: "5-8 meters",
    },
    {
      name: "Keora",
      scientific: "Sonneratia apetala",
      description: "Pioneer species in new mudflats, first to colonize new areas.",
      features: ["Candle-like pneumatophores", "Fast growing", "Pioneer species"],
      height: "10-15 meters",
    },
  ];

  const tabs = [
    { id: "animals", label: "Animals", icon: <PawPrint size={18} /> },
    { id: "birds", label: "Birds", icon: <Bird size={18} /> },
    { id: "mangroves", label: "Mangroves", icon: <Trees size={18} /> },
    { id: "conservation", label: "Conservation", icon: <Shield size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-green-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/50 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sunderban Wildlife
          </h1>
          <p className="text-green-100 text-xl max-w-3xl">
            Discover the incredible biodiversity of the world's largest mangrove forest
          </p>
          
          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { value: "400+", label: "Royal Bengal Tigers", color: "bg-orange-500" },
              { value: "300+", label: "Bird Species", color: "bg-blue-500" },
              { value: "50+", label: "Reptile Species", color: "bg-green-500" },
              { value: "78", label: "Mangrove Species", color: "bg-emerald-500" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <div className={`w-3 h-3 rounded-full ${stat.color} mr-2`}></div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-green-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-20 z-40 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                    : "text-gray-600 hover:text-green-500 hover:bg-green-50/50"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Animals Tab */}
        {activeTab === "animals" && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Wildlife</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The Sunderban is home to some of the world's most unique and endangered species
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {animals.map((animal, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
                  <div className="relative h-64">
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        {animal.icon}
                        <span className="ml-2 font-semibold text-gray-800">{animal.name}</span>
                      </div>
                    </div>
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-bold ${
                      animal.status === "Endangered" ? "bg-red-500" :
                      animal.status === "Vulnerable" ? "bg-orange-500" : "bg-green-500"
                    }`}>
                      {animal.status}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
                        <p className="text-gray-500 text-sm italic">{animal.scientific}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-700">{animal.population}</div>
                        <div className="text-gray-500 text-sm">Estimated Population</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{animal.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                          <Info size={16} className="mr-2 text-green-600" />
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {animal.features.map((feature, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-center">
                              <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                          <AlertCircle size={16} className="mr-2 text-red-600" />
                          Major Threats
                        </h4>
                        <ul className="space-y-1">
                          {animal.threats.map((threat, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-center">
                              <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                              {threat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Birds Tab */}
        {activeTab === "birds" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Avian Diversity</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Over 300 bird species including migratory, resident, and endemic species
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Bird className="text-blue-600 mr-3" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Bird Watching Hotspots</h3>
                  <p className="text-gray-600">Best locations for bird enthusiasts</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { name: "Sajnekhali", birds: "120+ species", bestTime: "Nov-Feb" },
                  { name: "Sudhanyakhali", birds: "150+ species", bestTime: "Oct-Mar" },
                  { name: "Netidhopani", birds: "100+ species", bestTime: "Year-round" },
                ].map((spot, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{spot.name}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Species:</span>
                        <span className="font-semibold">{spot.birds}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Best Time:</span>
                        <span className="font-semibold text-green-600">{spot.bestTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Commonly Spotted Birds</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {birds.map((bird, index) => (
                  <div 
                    key={index}
                    className="bg-green-50 hover:bg-green-100 p-4 rounded-xl transition-colors duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <Bird size={16} className="text-green-600" />
                      </div>
                      <span className="text-gray-700">{bird}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mangroves Tab */}
        {activeTab === "mangroves" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Mangrove Ecosystem</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The Sunderban has the world's largest contiguous mangrove forest
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mangroveSpecies.map((species, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <Trees size={64} className="text-white/80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{species.name}</h3>
                    <p className="text-gray-500 text-sm italic mb-3">{species.scientific}</p>
                    <p className="text-gray-600 mb-4">{species.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Unique Features</h4>
                        <div className="space-y-1">
                          {species.features.map((feature, i) => (
                            <div key={i} className="text-gray-600 text-sm flex items-center">
                              <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Average Height:</span>
                          <span className="font-bold text-green-700">{species.height}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Mangroves Matter</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Coastal Protection",
                    description: "Reduces impact of storms and prevents erosion",
                    icon: "🛡️",
                  },
                  {
                    title: "Carbon Sink",
                    description: "Stores 4x more carbon than tropical forests",
                    icon: "🌿",
                  },
                  {
                    title: "Nursery Grounds",
                    description: "Provides breeding grounds for fish and crustaceans",
                    icon: "🐟",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Conservation Tab */}
        {activeTab === "conservation" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Conservation Efforts</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Protecting the fragile ecosystem of Sunderban for future generations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Tiger Protection Program",
                  organization: "Sunderban Tiger Reserve Authority",
                  description: "24/7 monitoring using camera traps and patrol boats to prevent poaching",
                  achievements: "Increased tiger population by 8% in last 5 years",
                  icon: <PawPrint className="text-orange-500" size={24} />,
                },
                {
                  title: "Mangrove Restoration",
                  organization: "Green Sunderban Initiative",
                  description: "Planting 1 million mangrove saplings annually to combat erosion",
                  achievements: "Restored 5000 hectares of degraded mangrove land",
                  icon: <Trees className="text-green-500" size={24} />,
                },
                {
                  title: "Community Based Tourism",
                  organization: "Local Village Cooperatives",
                  description: "Training local communities as guides to reduce forest dependence",
                  achievements: "Created 200+ sustainable livelihoods",
                  icon: <Users className="text-blue-500" size={24} />,
                },
                {
                  title: "Plastic Pollution Control",
                  organization: "Clean Sunderban Campaign",
                  description: "Regular cleanup drives and waste management systems",
                  achievements: "Collected 50 tons of plastic waste in 2023",
                  icon: <Shield className="text-teal-500" size={24} />,
                },
              ].map((program, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-green-50 rounded-lg mr-4">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                      <p className="text-green-600 font-medium">{program.organization}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-semibold text-green-800 mb-1">Key Achievement:</div>
                    <div className="text-green-700">{program.achievements}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">How You Can Help</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  "Choose eco-friendly tours",
                  "Avoid plastic during visits",
                  "Support local communities",
                ].map((tip, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="text-xl font-bold mb-1">{index + 1}</div>
                    <div>{tip}</div>
                  </div>
                ))}
              </div>
              <button className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-bold transition-colors duration-300">
                Support Conservation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WildlifePage;