"use client";

import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import { Search, Calendar, User, Clock, X } from "lucide-react";

// Import your Strapi service
import { getBlogPosts } from "@/services/strapi-service";

const BlogPage = () => {
  // State for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [authors, setAuthors] = useState<string[]>(["All"]);
  const [dateFilter, setDateFilter] = useState("newest");
  const [loading, setLoading] = useState(true);

  // Initial data fetch from Strapi
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const posts = await getBlogPosts();
      setAllPosts(posts);
      setFilteredPosts(posts);
      
      // Get unique categories
      const uniqueCategories = ["All", ...new Set(posts.map((post: any) => post.category))];
      setCategories(uniqueCategories.filter(Boolean));
      
      // Get unique authors
      const uniqueAuthors = ["All", ...new Set(posts.map((post: any) => post.author))];
      setAuthors(uniqueAuthors.filter(Boolean));
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Apply filters
  useEffect(() => {
    if (allPosts.length === 0) return;

    let result = [...allPosts];

    // Search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag: string) =>
            tag.toLowerCase().includes(query)
          ) ||
          post.author.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((post) => post.category === selectedCategory);
    }

    // Author filter
    if (selectedAuthor !== "All") {
      result = result.filter((post) => post.author === selectedAuthor);
    }

    // Date sorting
    if (dateFilter === "newest") {
      result = [...result].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (dateFilter === "oldest") {
      result = [...result].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    setFilteredPosts(result);
  }, [searchQuery, selectedCategory, selectedAuthor, dateFilter, allPosts]);

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedAuthor("All");
    setDateFilter("newest");
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-green-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop)",
          }}
        />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sunderban Blog & Guides
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Expert insights, wildlife updates, and travel guides from Strapi CMS
          </p>
          <div className="mt-4 flex items-center text-green-200">
            <div className="bg-green-800/50 px-3 py-1 rounded-full text-sm">
              Powered by Strapi CMS
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles by title, content, author, or tags..."
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
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Category
                </span>
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Author Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center">
                  <User size={16} className="mr-2" />
                  Author
                </span>
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
              >
                {authors.map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  Sort by Date
                </span>
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Active Filters & Results */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {loading ? (
                <span className="text-sm text-gray-600">Loading...</span>
              ) : (
                <span className="text-sm text-gray-600">
                  {filteredPosts.length} of {allPosts.length} articles
                </span>
              )}

              {/* Active Filters Display */}
              {(searchQuery || selectedCategory !== "All" || selectedAuthor !== "All") && (
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Search: "{searchQuery}"
                      <button
                        onClick={() => setSearchQuery("")}
                        className="hover:text-blue-900"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {selectedCategory !== "All" && (
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory("All")}
                        className="hover:text-green-900"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {selectedAuthor !== "All" && (
                    <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                      Author: {selectedAuthor}
                      <button
                        onClick={() => setSelectedAuthor("All")}
                        className="hover:text-purple-900"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Clear Filters Button */}
            {(searchQuery || selectedCategory !== "All" || selectedAuthor !== "All") && (
              <button
                onClick={clearAllFilters}
                className="text-green-600 hover:text-green-700 font-medium flex items-center text-sm"
              >
                <X size={16} className="mr-1" />
                Clear All Filters
              </button>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Loading from Strapi CMS...
            </h3>
            <p className="text-gray-500">Fetching your blog posts</p>
          </div>
        ) : (
          /* Results Section */
          <>
            {filteredPosts.length > 0 ? (
              <>
                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {filteredPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      title={post.title}
                      excerpt={post.excerpt}
                      author={post.author}
                      date={formatDate(post.date)}
                      category={post.category}
                      readTime={post.readTime}
                      image={post.image}
                      slug={post.slug}
                    />
                  ))}
                </div>

                {/* Tags Cloud */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {["Wildlife", "Conservation", "Travel Tips", "Photography", "Birds", "Culture", "Ecology", "Tourism"].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            if (selectedCategory === tag) {
                              setSelectedCategory("All");
                            } else {
                              setSelectedCategory(tag);
                            }
                          }}
                          className={`px-5 py-2 rounded-full transition-all duration-300 ${
                            selectedCategory === tag
                              ? "bg-green-600 text-white shadow-lg transform scale-105"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </>
            ) : (
              // No Results Found
              <div className="text-center py-16">
                <div className="text-gray-400 mb-6">
                  <Search size={80} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">
                  No articles found
                </h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  {allPosts.length === 0
                    ? "No articles published yet in Strapi CMS."
                    : "Try adjusting your search or filters to find what you're looking for."}
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  Show All Articles
                </button>
              </div>
            )}
          </>
        )}

        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Subscribe to Wildlife Updates
          </h2>
          <p className="text-gray-600 mb-6">
            Get monthly updates on tiger sightings, bird migrations, and conservation news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* Strapi CMS Status */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl max-w-3xl mx-auto">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <h3 className="text-lg font-bold text-blue-800">
              🚀 Connected to Strapi CMS
            </h3>
          </div>
          <p className="text-blue-700 mb-3">
            This blog is now powered by Strapi. You can manage all content through the admin panel.
          </p>
          <div className="text-blue-600 text-sm space-y-1">
            <div>• Blog posts are fetched from: {process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}</div>
            <div>• Total articles in CMS: {allPosts.length}</div>
            <div>• Categories: {categories.filter(c => c !== "All").join(", ")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;