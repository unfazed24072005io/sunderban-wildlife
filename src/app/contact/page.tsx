"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, User, MessageSquare, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourType: "",
    travelDate: "",
    groupSize: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone Numbers",
      details: [
        { label: "Booking & Enquiries", value: "+91 98765 43210" },
        { label: "Emergency", value: "+91 98765 43211" },
        { label: "WhatsApp", value: "+91 98765 43212" },
      ],
      color: "bg-blue-50",
    },
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: "Email Addresses",
      details: [
        { label: "Bookings", value: "bookings@sunderbanwildlife.com" },
        { label: "Enquiries", value: "info@sunderbanwildlife.com" },
        { label: "Support", value: "support@sunderbanwildlife.com" },
      ],
      color: "bg-green-50",
    },
    {
      icon: <MapPin className="text-green-600" size={24} />,
      title: "Our Offices",
      details: [
        { label: "Kolkata Office", value: "12, Park Street, Kolkata - 700016" },
        { label: "Sunderban Base", value: "Godkhali Jetty, Sunderban" },
      ],
      color: "bg-amber-50",
    },
    {
      icon: <Clock className="text-green-600" size={24} />,
      title: "Working Hours",
      details: [
        { label: "Monday - Saturday", value: "7:00 AM - 9:00 PM" },
        { label: "Sunday", value: "8:00 AM - 8:00 PM" },
        { label: "Emergency", value: "24/7 Available" },
      ],
      color: "bg-purple-50",
    },
  ];

  const tourTypes = [
    "Royal Bengal Tiger Safari",
    "Bird Watching Expedition",
    "Mangrove Forest Cruise",
    "Photography Tour",
    "Cultural Village Tour",
    "Night Safari Adventure",
    "Custom Tour Package",
    "Not Sure - Need Advice",
  ];

  const groupSizes = ["1 Person", "2-4 People", "5-8 People", "9-12 People", "13+ People"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.tourType) newErrors.tourType = "Please select a tour type";
    if (!formData.travelDate) newErrors.travelDate = "Please select travel date";
    if (!formData.groupSize) newErrors.groupSize = "Please select group size";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        tourType: "",
        travelDate: "",
        groupSize: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const faqs = [
    {
      question: "What is the best time to visit Sunderban?",
      answer: "November to February offers pleasant weather and best wildlife sightings.",
    },
    {
      question: "Is it safe to go on tiger safari?",
      answer: "Yes, all safaris are conducted with experienced guides and follow strict safety protocols.",
    },
    {
      question: "What should I pack for the tour?",
      answer: "Light cotton clothes, binoculars, camera, sunscreen, mosquito repellent, and medications.",
    },
    {
      question: "Are children allowed on tours?",
      answer: "Children above 8 years are allowed on most tours. Some adventurous tours have age restrictions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-green-100 text-xl mb-8">
              Ready for your Sunderban adventure? Contact our wildlife experts for personalized tour planning.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">24/7 Support Available</span>
              </div>
              <div className="text-green-200">
                • Response within 2 hours
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 -mt-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${info.color} rounded-2xl shadow-lg p-6 border border-green-100`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white rounded-xl mr-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{info.title}</h3>
              </div>
              <div className="space-y-3">
                {info.details.map((detail, idx) => (
                  <div key={idx}>
                    <div className="text-sm text-gray-600 mb-1">{detail.label}</div>
                    <div className="font-semibold text-gray-800">{detail.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-green-100 rounded-xl mr-4">
                  <MessageSquare className="text-green-600" size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Send Your Enquiry</h2>
                  <p className="text-gray-600">Fill the form below and our team will contact you shortly</p>
                </div>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6"
                >
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={24} />
                    <div>
                      <h3 className="font-bold text-green-800 text-lg">Message Sent Successfully!</h3>
                      <p className="text-green-700">
                        Thank you for contacting us. Our wildlife expert will reach out to you within 2 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Messages */}
              {Object.keys(errors).length > 0 && (
                <div className="mb-8 bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="text-red-600 mr-3" size={24} />
                    <h3 className="font-bold text-red-800 text-lg">Please fix the following errors:</h3>
                  </div>
                  <ul className="space-y-2">
                    {Object.entries(errors).map(([field, message]) => (
                      <li key={field} className="text-red-700 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        {message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center">
                        <User size={16} className="mr-2" />
                        Full Name *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.name ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.email ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.phone ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Tour Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Tour *
                    </label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.tourType ? "border-red-300" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a tour type</option>
                      {tourTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Travel Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        Preferred Travel Date *
                      </span>
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.travelDate ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Group Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Group Size *
                    </label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        errors.groupSize ? "border-red-300" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select group size</option>
                      {groupSizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message / Special Requirements *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.message ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your travel preferences, any special requirements, or questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-3" />
                        Send Enquiry
                      </>
                    )}
                  </button>
                  <p className="text-gray-500 text-sm text-center mt-4">
                    * Required fields. We respect your privacy and will not share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar - FAQs and Map */}
          <div className="space-y-8">
            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h4 className="font-bold text-gray-800 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-green-50 hover:bg-green-100 text-green-700 font-medium py-3 rounded-xl transition-colors duration-300">
                View All FAQs
              </button>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-green-200 mb-1">Call us now</div>
                  <div className="text-2xl font-bold">+91 98765 43210</div>
                </div>
                <div>
                  <div className="text-sm text-green-200 mb-1">WhatsApp</div>
                  <div className="text-lg font-medium">+91 98765 43212</div>
                </div>
                <div>
                  <div className="text-sm text-green-200 mb-1">Response Time</div>
                  <div className="text-lg font-medium">Within 2 hours</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-green-500">
                <h4 className="font-bold text-lg mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  {[
                    "24/7 Customer Support",
                    "Expert Wildlife Guides",
                    "Flexible Cancellation Policy",
                    "Best Price Guarantee",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={18} className="mr-3 text-green-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Kolkata Office Location
              </h3>
              <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mb-4 flex items-center justify-center">
                <MapPin className="text-green-400" size={48} />
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-gray-800">12, Park Street</div>
                <div className="text-gray-600">Kolkata - 700016</div>
                <div className="text-gray-500 text-sm">West Bengal, India</div>
              </div>
              <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl transition-colors duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="p-3 bg-white/20 rounded-full mr-4">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency Contact</h3>
                <p className="text-white/90">For immediate assistance during tours</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold">+91 98765 43211</div>
              <div className="text-white/80">Available 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;