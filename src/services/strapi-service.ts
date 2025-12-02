const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

console.log('✅ Strapi Service: Ready to fetch from', strapiUrl);

// Blog Posts - PERFECTLY MATCHED TO YOUR STRUCTURE
export const getBlogPosts = async () => {
  try {
    console.log('📡 Fetching blog posts from Strapi...');
    
    const response = await fetch(`${strapiUrl}/api/blog-posts?populate=*&sort=published_date:desc`);
    
    if (!response.ok) {
      console.error('❌ Fetch failed:', response.status, response.statusText);
      return [];
    }
    
    const result = await response.json();
    console.log('📊 API Response received');
    
    // Check structure
    if (!result.data || !Array.isArray(result.data)) {
      console.warn('⚠️ Unexpected data structure:', result);
      return [];
    }
    
    console.log(`📝 Found ${result.data.length} posts`);
    
    // Process posts - DIRECT FIELD ACCESS (your structure)
    const posts = result.data.map((post: any) => {
      // Extract data from DIRECT fields (no .attributes)
      const postData = {
        id: post.id || 0,
        title: post.title || 'Untitled Post',
        slug: post.slug || 'no-slug',
        excerpt: post.excerpt || 'No excerpt available',
        author: post.author || 'Unknown Author',
        date: post.published_date || post.publishedAt || new Date().toISOString(),
        category: post.category || 'Uncategorized',
        read_time: post.read_time || 5,
        tags: post.tags || [],
        featured_image: post.featured_image || null
      };
      
      // Get image URL - your structure: post.featured_image.url
      let imageUrl = 'https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070';
      
      if (postData.featured_image && postData.featured_image.url) {
        // Your exact structure: featured_image has direct url property
        imageUrl = `${strapiUrl}${postData.featured_image.url}`;
        console.log(`🖼️ Image found: ${imageUrl}`);
      } else {
        console.log('📸 No image found, using fallback');
      }
      
      // Format for BlogCard component
      return {
        id: postData.id,
        title: postData.title,
        slug: postData.slug,
        excerpt: postData.excerpt,
        author: postData.author,
        date: formatDate(postData.date),
        category: postData.category,
        readTime: `${postData.read_time} min`,
        image: imageUrl,
        tags: Array.isArray(postData.tags) ? postData.tags : []
      };
    });
    
    console.log('🎉 Successfully processed posts:', posts.length);
    return posts;
    
  } catch (error) {
    console.error('💥 Error in getBlogPosts:', error);
    return [];
  }
};

// Helper to format date
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
// Get single blog post by slug
export const getBlogPostBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `${strapiUrl}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
    );
    
    if (!response.ok) {
      return null;
    }
    
    const result = await response.json();
    
    if (!result.data || result.data.length === 0) {
      return null;
    }
    
    const post = result.data[0];
    
    // Get image URL
    let imageUrl = 'https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070';
    if (post.featured_image?.url) {
      imageUrl = `${strapiUrl}${post.featured_image.url}`;
    }
    
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      author: post.author,
      date: post.published_date || post.publishedAt,
      category: post.category,
      readTime: `${post.read_time || 5} min`,
      image: imageUrl,
      tags: post.tags || [],
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};
// Tour Packages - using same direct field structure
export const getTourPackages = async () => {
  try {
    const response = await fetch(`${strapiUrl}/api/tour-packages?populate=*`);
    
    if (!response.ok) {
      return [];
    }
    
    const result = await response.json();
    
    if (!result.data || !Array.isArray(result.data)) {
      return [];
    }
    
    return result.data.map((tour: any) => {
      // Direct field access
      let imageUrl = 'https://images.unsplash.com/photo-1550358864-518f202c02ba?q=80&w=2070';
      
      if (tour.image && tour.image.url) {
        imageUrl = `${strapiUrl}${tour.image.url}`;
      }
      
      return {
        id: tour.id || 0,
        title: tour.title || 'Tour Package',
        description: tour.description || '',
        duration: tour.duration || 'Not specified',
        durationValue: tour.duration_value || 0,
        groupSize: tour.group_size || 'Not specified',
        location: tour.location || 'Sunderban',
        rating: tour.rating || 4.5,
        price: tour.price || 0,
        image: imageUrl,
        tags: tour.tags || [],
      };
    });
  } catch (error) {
    console.error('Error fetching tours:', error);
    return [];
  }
};