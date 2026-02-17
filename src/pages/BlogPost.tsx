import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Software Testing: A Complete Guide for Beginners',
    excerpt: 'Learn the fundamentals of software testing, including different types of testing, testing methodologies, and how to start your career as a software tester.',
    content: `
      <h2>Introduction to Software Testing</h2>
      <p>Software testing is a critical component of the software development lifecycle. It ensures that applications meet quality standards and function as intended before reaching end users. Whether you're a complete beginner or looking to transition into a testing career, this guide will provide you with a solid foundation.</p>
      
      <h2>What is Software Testing?</h2>
      <p>Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs, and improving performance.</p>
      
      <h2>Types of Software Testing</h2>
      <p>There are two main categories of software testing:</p>
      <ul>
        <li><strong>Manual Testing:</strong> Testing software manually without using any automated tools or scripts.</li>
        <li><strong>Automation Testing:</strong> Using specialized tools to execute test cases automatically.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To start your journey in software testing, you should:</p>
      <ul>
        <li>Learn the basics of software development lifecycle (SDLC)</li>
        <li>Understand different testing methodologies</li>
        <li>Practice writing test cases</li>
        <li>Get familiar with testing tools like JIRA, Selenium, and Postman</li>
        <li>Build a portfolio of test projects</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Software testing is a rewarding career path with excellent growth opportunities. With dedication and the right training, you can become a skilled tester and contribute to building high-quality software products.</p>
    `,
    image: '/images/blog-1.jpg',
    category: 'Manual Testing',
    author: 'Rahul Sharma',
    authorRole: 'Lead QA Engineer',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    tags: ['Testing', 'Beginners', 'Career'],
  },
  {
    id: 2,
    title: 'Selenium WebDriver Best Practices for Robust Test Automation',
    excerpt: 'Discover the best practices for writing maintainable and scalable Selenium tests, including Page Object Model, waits, and error handling.',
    content: `
      <h2>Introduction to Selenium Best Practices</h2>
      <p>Selenium WebDriver is one of the most popular tools for browser automation. However, writing maintainable and scalable tests requires following certain best practices. In this article, we'll explore the key principles that will help you build robust test automation frameworks.</p>
      
      <h2>Page Object Model (POM)</h2>
      <p>The Page Object Model is a design pattern that creates an object repository for web UI elements. It helps in reducing code duplication and improves test maintenance.</p>
      
      <h2>Proper Use of Waits</h2>
      <p>One of the most common issues in Selenium tests is timing. Using explicit waits instead of Thread.sleep() makes your tests more reliable and faster.</p>
      
      <h2>Error Handling</h2>
      <p>Implementing proper error handling and logging helps in debugging failed tests and understanding what went wrong.</p>
      
      <h2>Conclusion</h2>
      <p>Following these best practices will help you create maintainable, scalable, and reliable test automation suites that provide value to your development process.</p>
    `,
    image: '/images/blog-2.jpg',
    category: 'Automation',
    author: 'Vikram Singh',
    authorRole: 'Senior SDET',
    date: 'Jan 12, 2025',
    readTime: '10 min read',
    tags: ['Selenium', 'Automation', 'Best Practices'],
  },
  {
    id: 3,
    title: 'API Testing with Postman: From Basics to Advanced',
    excerpt: 'Master API testing with Postman. Learn how to create collections, write test scripts, and automate your API testing workflow.',
    content: `
      <h2>Introduction to API Testing</h2>
      <p>API testing is a type of software testing that involves testing application programming interfaces (APIs) directly. Postman is a popular tool that makes API testing accessible and efficient.</p>
      
      <h2>Getting Started with Postman</h2>
      <p>Postman provides an intuitive interface for creating and sending HTTP requests. You can test REST, SOAP, and GraphQL APIs with ease.</p>
      
      <h2>Creating Collections</h2>
      <p>Collections in Postman help you organize your API requests. You can group related requests together and share them with your team.</p>
      
      <h2>Writing Test Scripts</h2>
      <p>Postman allows you to write JavaScript test scripts to validate API responses. You can check status codes, response times, and response body content.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering Postman will significantly improve your API testing capabilities and help you ensure the quality of your backend services.</p>
    `,
    image: '/images/blog-3.jpg',
    category: 'API Testing',
    author: 'Priya Patel',
    authorRole: 'API Testing Specialist',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    tags: ['API', 'Postman', 'Testing'],
  },
  {
    id: 4,
    title: 'Performance Testing with JMeter: A Practical Guide',
    excerpt: 'Learn how to design and execute performance tests using Apache JMeter to ensure your applications can handle real-world traffic.',
    content: `
      <h2>Introduction to Performance Testing</h2>
      <p>Performance testing is crucial for ensuring your application can handle expected user loads. Apache JMeter is a powerful open-source tool for load and performance testing.</p>
      
      <h2>Setting Up JMeter</h2>
      <p>JMeter is easy to install and configure. It supports various protocols including HTTP, HTTPS, FTP, and databases.</p>
      
      <h2>Creating Test Plans</h2>
      <p>A well-structured test plan is essential for effective performance testing. It should include thread groups, samplers, listeners, and assertions.</p>
      
      <h2>Analyzing Results</h2>
      <p>JMeter provides various listeners to analyze test results. Understanding metrics like response time, throughput, and error rate is crucial.</p>
      
      <h2>Conclusion</h2>
      <p>Regular performance testing helps identify bottlenecks early and ensures your application performs well under load.</p>
    `,
    image: '/images/blog-4.jpg',
    category: 'Performance',
    author: 'Anita Desai',
    authorRole: 'Performance Test Architect',
    date: 'Jan 8, 2025',
    readTime: '12 min read',
    tags: ['JMeter', 'Performance', 'Load Testing'],
  },
  {
    id: 5,
    title: 'Mobile App Testing: Challenges and Best Practices',
    excerpt: 'Explore the unique challenges of mobile app testing and learn best practices for testing iOS and Android applications.',
    content: `
      <h2>Introduction to Mobile Testing</h2>
      <p>Mobile app testing presents unique challenges due to the variety of devices, screen sizes, and operating systems. This guide covers the essential aspects of mobile testing.</p>
      
      <h2>Types of Mobile Testing</h2>
      <p>Mobile testing includes functional testing, usability testing, performance testing, security testing, and compatibility testing across different devices.</p>
      
      <h2>Device Fragmentation</h2>
      <p>One of the biggest challenges in mobile testing is device fragmentation. Testing on real devices, emulators, and cloud-based device labs can help address this.</p>
      
      <h2>Automation with Appium</h2>
      <p>Appium is a popular open-source tool for automating mobile application testing. It supports both iOS and Android platforms.</p>
      
      <h2>Conclusion</h2>
      <p>A comprehensive mobile testing strategy is essential for delivering high-quality mobile applications that work well across all devices.</p>
    `,
    image: '/images/blog-5.jpg',
    category: 'Mobile Testing',
    author: 'Karthik Rajan',
    authorRole: 'Mobile QA Lead',
    date: 'Jan 5, 2025',
    readTime: '9 min read',
    tags: ['Mobile', 'Appium', 'iOS', 'Android'],
  },
  {
    id: 6,
    title: 'CI/CD for Testers: Integrating Automation into DevOps',
    excerpt: 'Learn how to integrate your automated tests into CI/CD pipelines using Jenkins, GitHub Actions, and other popular tools.',
    content: `
      <h2>Introduction to CI/CD</h2>
      <p>Continuous Integration and Continuous Delivery (CI/CD) practices have become essential in modern software development. Testers play a crucial role in this pipeline.</p>
      
      <h2>Why Testers Need CI/CD</h2>
      <p>Integrating automated tests into CI/CD pipelines ensures that quality checks are performed automatically with every code change, catching issues early.</p>
      
      <h2>Popular CI/CD Tools</h2>
      <p>Jenkins, GitHub Actions, GitLab CI, and Azure DevOps are popular tools for implementing CI/CD pipelines. Each has its strengths and use cases.</p>
      
      <h2>Best Practices</h2>
      <p>Key practices include keeping tests fast, maintaining test stability, and providing clear feedback when tests fail.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding CI/CD is essential for modern testers. It enables faster feedback loops and helps maintain high software quality.</p>
    `,
    image: '/images/blog-6.jpg',
    category: 'DevOps',
    author: 'Suresh Kumar',
    authorRole: 'DevOps Architect',
    date: 'Jan 3, 2025',
    readTime: '11 min read',
    tags: ['CI/CD', 'DevOps', 'Jenkins'],
  },
];

const relatedPosts = [
  {
    id: 2,
    title: 'Selenium WebDriver Best Practices',
    image: '/images/blog-2.jpg',
  },
  {
    id: 3,
    title: 'API Testing with Postman',
    image: '/images/blog-3.jpg',
  },
  {
    id: 4,
    title: 'Performance Testing with JMeter',
    image: '/images/blog-4.jpg',
  },
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001F3F] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="ghost"
            className="text-white hover:text-[#FFD700] mb-6"
          >
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          <Badge className="bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30 mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#001F3F] font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-sm">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                #{tag}
              </Badge>
            ))}
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold text-[#001F3F] mb-4">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-lg font-bold text-[#001F3F] hover:text-[#FFD700] transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
