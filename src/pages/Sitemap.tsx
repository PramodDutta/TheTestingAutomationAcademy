import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Home, BookOpen, Shield, HelpCircle } from 'lucide-react';

const sitemapSections = [
  {
    title: 'Main Pages',
    icon: Home,
    links: [
      { name: 'Home', href: '/' },
      { name: 'Courses', href: '/courses' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Testimonials', href: '/testimonials' },
    ],
  },
  {
    title: 'Our Courses',
    icon: BookOpen,
    links: [
      { name: 'Manual Testing Masterclass', href: '/courses/manual-testing-masterclass' },
      { name: 'API Testing with Postman', href: '/courses/api-testing-postman' },
      { name: 'Automation Testing with Java', href: '/courses/automation-testing-java' },
      { name: 'Performance Testing with JMeter', href: '/courses/performance-testing-jmeter' },
      { name: 'Mobile App Testing', href: '/courses/mobile-app-testing' },
      { name: 'DevOps for Testers', href: '/courses/devops-for-testers' },
    ],
  },
  {
    title: 'Legal & Policies',
    icon: Shield,
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'No Refund Policy', href: '/no-refund' },
      { name: 'Shipping & Delivery', href: '/shipping-delivery' },
    ],
  },
  {
    title: 'Support',
    icon: HelpCircle,
    links: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001F3F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sitemap</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find all pages and sections of TheTestingAutomationAcademy website
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-[#001F3F]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#001F3F]">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className="text-gray-600 hover:text-[#FFD700] transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
