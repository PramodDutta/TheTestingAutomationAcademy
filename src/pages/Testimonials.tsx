import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Play, Quote } from 'lucide-react';
import { testimonials } from '@/data/courses';

const additionalTestimonials = [
  {
    id: 5,
    name: 'Jennifer Lee',
    role: 'QA Analyst at Adobe',
    image: '/images/testimonial-5.jpg',
    content: 'The Manual Testing Masterclass was exactly what I needed to start my career in software testing. The instructors are knowledgeable and the projects are very practical.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Rajesh Kumar',
    role: 'Senior SDET at Flipkart',
    image: '/images/testimonial-6.jpg',
    content: 'I took the Automation Testing with Java course and it completely transformed my career. The framework design concepts I learned are invaluable.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Emily Chen',
    role: 'Test Engineer at Salesforce',
    image: '/images/testimonial-7.jpg',
    content: 'The API Testing course helped me understand REST APIs and how to test them effectively. The Postman techniques I learned are used daily in my job.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Arun Sharma',
    role: 'QA Lead at Wipro',
    image: '/images/testimonial-8.jpg',
    content: 'The DevOps for Testers course helped me understand CI/CD pipelines and how to integrate automation tests. Highly recommended for any tester looking to upskill.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001F3F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student Success Stories
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our successful students who have transformed their careers with TheTestingAutomationAcademy. These testimonials reflect the real experiences of professionals who have taken our courses.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Students Trained' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '95%', label: 'Placement Rate' },
              { value: '50+', label: 'Hiring Partners' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-[#001F3F]">{stat.value}</div>
                <div className="text-[#001F3F]/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our successful students who transformed their careers with TheTestingAutomationAcademy courses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-[#001F3F] ml-0.5" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-[#001F3F]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-12 text-center">
            More Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-[#FFD700] mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#001F3F] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001F3F]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-gray-300 mb-8">
            Take the first step towards transforming your career in software testing. Enroll in one of our courses today and become part of our growing community of successful SDETs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
          >
            <Link to="/courses">Browse Our Courses</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
