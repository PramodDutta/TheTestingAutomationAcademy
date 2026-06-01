import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Play,
  Video,
  FolderCode,
  Briefcase,
  Users,
  Award,
  Clock,
  Star,
  ChevronRight,
  Code2,
} from 'lucide-react';
import { courses, testimonials } from '@/data/courses';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero entrance animations
    const heroElements = heroRef.current?.querySelectorAll('.animate-hero');
    heroElements?.forEach((el, i) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      setTimeout(() => {
        element.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 200 + i * 100);
    });
  }, []);

  const features = [
    { icon: Video, title: 'LIVE Classes', description: 'We conduct LIVE classes to help you become job ready with direct interaction and guidance.' },
    { icon: FolderCode, title: 'Project-Based Training', description: 'Project-based training helps you learn fast and solve every doubt with hands-on experience.' },
    { icon: Briefcase, title: 'LIVE Projects', description: 'We work with LIVE projects that are active in the current market to give you real experience.' },
  ];

  const whyChooseFeatures = [
    { icon: Users, title: 'Learn from Industry Expert', description: 'Get trained by an instructor with years of experience in software testing and development.' },
    { icon: FolderCode, title: 'Real-World Projects', description: 'Work on actual projects that are currently active in the industry.' },
    { icon: Video, title: 'Live Interactive Classes', description: 'Get your doubts resolved instantly during our live interactive sessions.' },
    { icon: Award, title: 'Job-Ready Training', description: 'Our curriculum is designed to make you job-ready with in-demand skills.' },
    { icon: Users, title: 'Personalized Attention', description: 'Limited batch size to ensure personalized attention to each student.' },
    { icon: Briefcase, title: 'Placement Assistance', description: 'Get guidance on resume building, interview preparation, and job search.' },
  ];

  const courseTracks = [
    {
      title: 'Automation Engineer/SDET Track',
      description: 'Become an Automation Engineer/SDET even as a Manual Tester with Real World Projects in',
      duration: '4-5 months',
      highlight: 'from Zero to Super Hero Automation Tester.',
    },
    {
      title: 'Job Ready Software Tester Track',
      description: 'Become a Job Ready Software Tester with JIRA, Scrum, Agile & Real Live Projects, API Testing Manually in',
      duration: '2.5 months',
      highlight: '(with SQL Masterclass, Mobile Testing).',
    },
    {
      title: 'API Automation Expert Track',
      description: 'Become an Expert in API Automation using Postman, REST Assured (+ Custom Framework, Maven, TestNG, BDD, Jenkins) in',
      duration: '2-3 months',
      highlight: '(Java, JS).',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-[#001F3F] overflow-hidden pt-20"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#FFD700]/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FFD700]/5 to-transparent rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="animate-hero">
                <Badge className="bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30 px-4 py-2 text-sm">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2 animate-pulse" />
                  LIVE Classes
                </Badge>
              </div>

              <h1 className="animate-hero text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Learn the Art of Software Testing &{' '}
                <span className="text-[#FFD700]">Upskill Yourself.</span>
              </h1>

              <p className="animate-hero text-lg text-gray-300 max-w-xl">
                Join our LIVE classes to become job-ready with in-demand{' '}
                <span className="text-white font-semibold">Manual</span> and{' '}
                <span className="text-white font-semibold">Automation testing skills</span>.
              </p>

              <div className="animate-hero flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold px-8"
                >
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </div>

              <div className="animate-hero flex flex-wrap gap-6 pt-4">
                {['LIVE Classes', 'Real Projects', 'Job Ready Skills', 'Expert Mentors'].map(
                  (feature) => (
                    <div key={feature} className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-hero relative lg:pl-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/images/hero-code.jpg"
                  alt="Code Editor"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/50 to-transparent" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFD700] rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                <Code2 className="w-10 h-10 text-[#001F3F]" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                  <span className="font-bold text-[#001F3F]">4.9/5</span>
                  <span className="text-gray-500 text-sm">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Job Ready Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
            Become <span className="bg-[#FFD700] px-2">Job Ready</span> with Top-Rated Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our courses are designed to help you master the skills that top companies are looking for
          </p>

          {/* Partner logos placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-50">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'].map((company) => (
              <div
                key={company}
                className="text-2xl font-bold text-gray-400 hover:text-[#001F3F] transition-colors"
              >
                {company}
              </div>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            className="border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white"
          >
            <Link to="/courses">Explore Our Hiring Partners</Link>
          </Button>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/instructor.jpg"
                  alt="Pramod Dutta"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#FFD700] rounded-lg p-4 shadow-lg">
                <p className="text-[#001F3F] font-bold text-lg">14+ Years</p>
                <p className="text-[#001F3F]/70 text-sm">Experience</p>
              </div>
            </div>

            <div className="space-y-6">
              <Badge className="bg-[#001F3F]/10 text-[#001F3F] border-none">
                CEO & Founder
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F]">
                Meet your Instructor <span className="inline-block animate-wave">👋</span>
              </h2>
              <p className="text-xl text-gray-700">
                <span className="font-semibold text-[#001F3F]">Pramod Dutta</span>
                  </p>
              <p className="text-gray-600 leading-relaxed">
                I teach Manual Testing, API Testing (Manual & Automation), Automation Testing (with Java).
                With over 14 years of experience in software testing, I've worked with major tech companies
                and have helped hundreds of students transition into successful testing careers.
              </p>
              <Button
                asChild
                className="bg-[#001F3F] text-white hover:bg-[#001F3F]/90"
              >
                <Link to="/courses">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tracks Section */}
      <section className="py-20 bg-[#FFD700]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {courseTracks.map((track, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#001F3F] mb-4">{track.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {track.description}{' '}
                    <span className="font-bold text-[#001F3F]">{track.duration}</span> - {track.highlight}
                  </p>
                  <Link
                    to="/courses"
                    className="inline-flex items-center text-[#001F3F] font-semibold hover:text-[#FFD700] transition-colors"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Why Learn with TheTestingAutomationAcademy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Want to learn with LIVE classes, project-based training with real LIVE projects? We've got you covered!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-[#FFD700]/10 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#FFD700] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-[#001F3F]" />
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">Our Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn in-demand testing skills through our comprehensive courses designed to make you job-ready with real-world projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
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
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#001F3F]">₹{course.price.toLocaleString()}</span>
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
                    className="w-full mt-4 bg-[#001F3F] text-white hover:bg-[#001F3F]/90"
                  >
                    <Link to={`/courses/${course.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
            >
              <Link to="/courses">Explore All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Why Choose TheTestingAutomationAcademy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a unique learning experience designed to transform beginners into job-ready testing professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-gray-50 hover:bg-[#FFD700]/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
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
                    <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
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

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white"
            >
              <Link to="/testimonials">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#001F3F] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFD700]/5 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#001F3F] to-[#001F3F]/80 rounded-3xl p-8 md:p-16 border border-white/10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Become Job-Ready QA?
              </h2>
              <p className="text-gray-300 mb-8">
                Join our LIVE classes today and transform your career with in-demand testing skills.
                Get access to project-based training and direct mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
                >
                  <Link to="/courses">Enroll Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/courses">View Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
