import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';

// Mock function - replace with your actual Strapi fetch
async function getBlogPost(slug: string) {
  // This should fetch from your Strapi
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  
  try {
    const response = await fetch(`${strapiUrl}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    
    if (!data.data || data.data.length === 0) {
      return null;
    }
    
    const post = data.data[0];
    
    // Format image URL
    let imageUrl = 'https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070';
    if (post.featured_image?.url) {
      imageUrl = `${strapiUrl}${post.featured_image.url}`;
    }
    
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content || 'Content coming soon...',
      excerpt: post.excerpt,
      author: post.author,
      date: new Date(post.published_date || post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      category: post.category,
      readTime: `${post.read_time || 5} min`,
      image: imageUrl,
      tags: post.tags || [],
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Generate static paths (optional for SSG)
export async function generateStaticParams() {
  // Fetch all blog post slugs from Strapi
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  
  try {
    const response = await fetch(`${strapiUrl}/api/blog-posts?fields[0]=slug`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    
    return data.data.map((post: any) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Related posts (mock data - should fetch from Strapi)
  const relatedPosts = [
    {
      id: 1,
      title: "Mangrove Ecosystem: Why It Matters",
      slug: "mangrove-ecosystem",
      excerpt: "Understanding the crucial role of mangrove forests...",
      category: "Ecology",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Bird Watching in Sunderban",
      slug: "bird-watching-sunderban",
      excerpt: "Spot and identify 200+ avian species...",
      category: "Bird Watching",
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-96">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-8 left-8">
          <span className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User size={18} className="mr-2 text-green-600" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2 text-green-600" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2 text-green-600" />
              <span>{post.readTime} read</span>
            </div>
            <button className="flex items-center text-green-600 hover:text-green-700">
              <Share2 size={18} className="mr-2" />
              Share
            </button>
          </div>

          {/* Excerpt */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <p className="text-lg italic text-gray-700">{post.excerpt}</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div className="space-y-6">
              <p className="text-xl text-gray-700">
                This is a detailed article about {post.title.toLowerCase()}. 
                In a real implementation, this content would come from your Strapi CMS.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                About the Royal Bengal Tiger
              </h2>
              <p>
                The Royal Bengal Tiger (Panthera tigris tigris) is the apex predator of the Sunderban mangrove forest. 
                These majestic creatures have uniquely adapted to the saline waters and dense mangroves, 
                making them excellent swimmers who can traverse between islands.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
                Conservation Status
              </h3>
              <p>
                With only about 100 individuals remaining in the Sunderban region, 
                the Royal Bengal Tiger is classified as Endangered. Conservation efforts 
                include 24/7 monitoring, anti-poaching patrols, and community-based 
                tourism initiatives.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                <h4 className="font-bold text-yellow-800 mb-2">🐯 Did You Know?</h4>
                <p className="text-yellow-700">
                  Sunderban tigers are the only tigers in the world that are 
                  adapted to swim in saline water and can travel up to 8 km 
                  between islands.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Best Time to Spot Tigers
              </h2>
              <p>
                The ideal time for tiger sightings in Sunderban is during the 
                winter months (November to February) when the weather is pleasant 
                and tigers are more active during daylight hours.
              </p>
            </div>
          )}
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <BookOpen className="mr-3 text-green-600" />
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience Sunderban?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Book your wildlife tour today and see these magnificent creatures in their natural habitat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-bold transition-colors duration-300"
            >
              View Tour Packages
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic'; // Remove if using generateStaticParams