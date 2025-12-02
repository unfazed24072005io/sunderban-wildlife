export default async function DebugPage() {
  const response = await fetch('http://localhost:1337/api/blog-posts?populate=*');
  const data = await response.json();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Strapi API Debug</h1>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Structure Analysis:</h2>
        <pre className="bg-gray-800 text-white p-4 rounded">
{`First item keys: ${data.data?.[0] ? Object.keys(data.data[0]) : 'No data'}

Has 'attributes' property: ${data.data?.[0]?.attributes ? 'YES' : 'NO'}

Direct properties:
- id: ${data.data?.[0]?.id}
- title: ${data.data?.[0]?.title}
- slug: ${data.data?.[0]?.slug}
- author: ${data.data?.[0]?.author}

Featured Image exists: ${data.data?.[0]?.featured_image ? 'YES' : 'NO'}`}
        </pre>
      </div>
    </div>
  );
}