import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const supportLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Refund Policy', href: '/refund' },
  { name: 'No Refund Policy', href: '/no-refund' },
  { name: 'Shipping & Delivery', href: '/shipping-delivery' },
  { name: 'Testimonials', href: '/testimonials' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
];

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    if (email) {
      toast.success('Thank you for subscribing!');
      form.reset();
    }
  };

  return (
    <footer className="bg-[#001F3F] text-white">
      {/* Top border animation */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-[#FFD700] font-bold text-xl">
              <Code2 className="w-6 h-6" />
              <span>TheTestingAutomationAcademy</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Learn in-demand Manual and Automation testing skills with project-based training and real LIVE projects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FFD700]">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#FFD700]">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#FFD700]"
              />
              <Button
                type="submit"
                className="w-full bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              ©2025 TheTestingAutomationAcademy, All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Terms
              </Link>
              <Link to="/shipping-delivery" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Shipping & Delivery
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
