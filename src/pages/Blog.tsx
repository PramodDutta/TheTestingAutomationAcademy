import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Software Testing: A Complete Guide for Beginners',
    excerpt: 'Learn the fundamentals of software testing, including different types of testing, testing methodologies, and how to start your career as a software tester.',
    image: '/images/blog-1.jpg',
    category: 'Manual Testing',
    author: 'Pramod Dutta',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Selenium WebDriver Best Practices for Robust Test Automation',
    excerpt: 'Discover the best practices for writing maintainable and scalable Selenium tests, including Page Object Model, waits, and error handling.',
    image: '/images/blog-2.jpg',
    category: 'Automation',
    author: 'Vikram Singh',
    date: 'Jan 12, 2025',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'API Testing with Postman: From Basics to Advanced',
    excerpt: 'Master API testing with Postman. Learn how to create collections, write test scripts, and automate your API testing workflow.',
    image: '/images/blog-3.jpg',
    category: 'API Testing',
    author: 'Priya Patel',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Performance Testing with JMeter: A Practical Guide',
    excerpt: 'Learn how to design and execute performance tests using Apache JMeter to ensure your applications can handle real-world traffic.',
    image: '/images/blog-4.jpg',
    category: 'Performance',
    author: 'Anita Desai',
    date: 'Jan 8, 2025',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Mobile App Testing: Challenges and Best Practices',
    excerpt: 'Explore the unique challenges of mobile app testing and learn best practices for testing iOS and Android applications.',
    image: '/images/blog-5.jpg',
    category: 'Mobile Testing',
    author: 'Karthik Rajan',
    date: 'Jan 5, 2025',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'CI/CD for Testers: Integrating Automation into DevOps',
    excerpt: 'Learn how to integrate your automated tests into CI/CD pipelines using Jenkins, GitHub Actions, and other popular tools.',
    image: '/images/blog-6.jpg',
    category: 'DevOps',
    author: 'Suresh Kumar',
    date: 'Jan 3, 2025',
    readTime: '11 min read',
    featured: false,
  },
];

const categories = [
  'All',
  'Manual Testing',
  'Automation',
  'API Testing',
  'Performance',
  'Mobile Testing',
  'DevOps',
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001F3F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and best practices from industry experts in software testing
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#001F3F] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchQuery && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#001F3F] mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit bg-[#FFD700] text-[#001F3F] mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-fit bg-[#001F3F] text-white hover:bg-[#001F3F]/90"
                  >
                    <Link to={`/blog/${featuredPost.id}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8">
            {searchQuery ? 'Search Results' : 'Latest Articles'}
          </h2>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery ? filteredPosts : regularPosts).map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#FFD700] text-[#001F3F]">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#001F3F] mb-3 line-clamp-2 group-hover:text-[#FFD700] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Get the latest articles, tutorials, and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
