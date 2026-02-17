import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, Star, Filter, BookOpen, Users, Briefcase } from 'lucide-react';
import { courses, faqs } from '@/data/courses';

export default function Courses() {
  const [filters, setFilters] = useState({
    level: [] as string[],
    duration: [] as string[],
    price: [] as string[],
  });

  const handleLevelChange = (level: string) => {
    setFilters((prev) => ({
      ...prev,
      level: prev.level.includes(level)
        ? prev.level.filter((l) => l !== level)
        : [...prev.level, level],
    }));
  };

  const handleDurationChange = (duration: string) => {
    setFilters((prev) => ({
      ...prev,
      duration: prev.duration.includes(duration)
        ? prev.duration.filter((d) => d !== duration)
        : [...prev.duration, duration],
    }));
  };

  const handlePriceChange = (price: string) => {
    setFilters((prev) => ({
      ...prev,
      price: prev.price.includes(price)
        ? prev.price.filter((p) => p !== price)
        : [...prev.price, price],
    }));
  };

  const filteredCourses = courses.filter((course) => {
    if (filters.level.length > 0 && !filters.level.includes(course.level)) {
      return false;
    }
    if (filters.duration.length > 0) {
      const months = parseFloat(course.duration);
      const matchesDuration = filters.duration.some((d) => {
        if (d === 'less-than-2') return months < 2;
        if (d === '2-3') return months >= 2 && months <= 3;
        if (d === 'more-than-3') return months > 3;
        return false;
      });
      if (!matchesDuration) return false;
    }
    if (filters.price.length > 0) {
      const matchesPrice = filters.price.some((p) => {
        if (p === 'under-10000') return course.price < 10000;
        if (p === '10000-20000') return course.price >= 10000 && course.price <= 20000;
        if (p === 'above-20000') return course.price > 20000;
        return false;
      });
      if (!matchesPrice) return false;
    }
    return true;
  });

  const whyChooseFeatures = [
    {
      icon: BookOpen,
      title: 'Industry-Relevant Curriculum',
      description: 'Our courses are designed by industry experts to ensure you learn the skills that employers are looking for.',
    },
    {
      icon: Users,
      title: 'Hands-on Projects',
      description: 'Apply what you learn through real-world projects that simulate actual testing environments.',
    },
    {
      icon: Briefcase,
      title: 'Job Assistance',
      description: 'Get help with resume building, interview preparation, and access to our hiring partner network.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001F3F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Courses
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive training programs designed to transform you into a skilled testing professional
          </p>
        </div>
      </section>

      {/* Courses Grid with Filters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-[#001F3F]" />
                  <h3 className="font-bold text-[#001F3F]">Filters</h3>
                </div>

                {/* Level Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#001F3F] mb-3">Level</h4>
                  <div className="space-y-2">
                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <div key={level} className="flex items-center gap-2">
                        <Checkbox
                          id={`level-${level}`}
                          checked={filters.level.includes(level)}
                          onCheckedChange={() => handleLevelChange(level)}
                        />
                        <Label htmlFor={`level-${level}`} className="text-sm text-gray-600 cursor-pointer">
                          {level}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#001F3F] mb-3">Duration</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'less-than-2', label: 'Less than 2 months' },
                      { id: '2-3', label: '2-3 months' },
                      { id: 'more-than-3', label: 'More than 3 months' },
                    ].map((duration) => (
                      <div key={duration.id} className="flex items-center gap-2">
                        <Checkbox
                          id={`duration-${duration.id}`}
                          checked={filters.duration.includes(duration.id)}
                          onCheckedChange={() => handleDurationChange(duration.id)}
                        />
                        <Label htmlFor={`duration-${duration.id}`} className="text-sm text-gray-600 cursor-pointer">
                          {duration.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="font-semibold text-[#001F3F] mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'under-10000', label: 'Under ₹10,000' },
                      { id: '10000-20000', label: '₹10,000 - ₹20,000' },
                      { id: 'above-20000', label: 'Above ₹20,000' },
                    ].map((price) => (
                      <div key={price.id} className="flex items-center gap-2">
                        <Checkbox
                          id={`price-${price.id}`}
                          checked={filters.price.includes(price.id)}
                          onCheckedChange={() => handlePriceChange(price.id)}
                        />
                        <Label htmlFor={`price-${price.id}`} className="text-sm text-gray-600 cursor-pointer">
                          {price.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#FFD700] text-[#001F3F] font-semibold">
                          {course.level}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#001F3F] text-white">
                          <Clock className="w-3 h-3 mr-1" />
                          {course.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-[#001F3F] mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-[#001F3F]">
                            ₹{course.price.toLocaleString()}
                          </span>
                          <span className="text-gray-400 line-through text-sm">
                            ₹{course.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-[#001F3F] text-white hover:bg-[#001F3F]/90"
                      >
                        <Link to={`/courses/${course.slug}`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">No courses match your filters.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setFilters({ level: [], duration: [], price: [] })}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">
              Why Choose TheTestingAutomationAcademy
            </h2>
            <p className="text-gray-600">
              We're committed to helping you succeed in your software testing journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#001F3F]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#001F3F] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our courses
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-[#001F3F] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
