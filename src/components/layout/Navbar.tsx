import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Shipping & Delivery', href: '/shipping-delivery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#001F3F]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#001F3F]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[#FFD700] font-bold text-xl hover:scale-105 transition-transform"
          >
            <Code2 className="w-6 h-6" />
            <span className="hidden sm:inline">TheTestingAutomationAcademy</span>
            <span className="sm:hidden">TTAA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.name === 'Courses' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCoursesOpen(true)}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-[#FFD700]'
                          : 'text-white hover:text-[#FFD700]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isCoursesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>
                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden transition-all origin-top ${
                        isCoursesOpen
                          ? 'opacity-100 scale-y-100 visible'
                          : 'opacity-0 scale-y-0 invisible'
                      }`}
                      style={{ transformOrigin: 'top' }}
                    >
                      <div className="py-2">
                        <Link
                          to="/courses/manual-testing-masterclass"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFD700]/10 hover:text-[#001F3F]"
                        >
                          Manual Testing Masterclass
                        </Link>
                        <Link
                          to="/courses/api-testing-postman"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFD700]/10 hover:text-[#001F3F]"
                        >
                          API Testing with Postman
                        </Link>
                        <Link
                          to="/courses/automation-testing-java"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFD700]/10 hover:text-[#001F3F]"
                        >
                          Automation Testing with Java
                        </Link>
                        <Link
                          to="/courses"
                          className="block px-4 py-2 text-sm font-medium text-[#001F3F] hover:bg-[#FFD700]/20"
                        >
                          View All Courses →
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive(link.href)
                        ? 'text-[#FFD700]'
                        : 'text-white hover:text-[#FFD700]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFD700] transition-all duration-300 ${
                        isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
            >
              <Link to="/courses">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#FFD700]/20 text-[#FFD700]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
            >
              <Link to="/courses">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
