import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Clock, Star, Play, Download, Award, Monitor, MessageCircle } from 'lucide-react';
import { getCourseBySlug } from '@/data/courses';
import { toast } from 'sonner';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const handleEnroll = () => {
    toast.success('Coming soon! Enrollment will be available shortly.');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001F3F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30">
                {course.level}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {course.title}
              </h1>
              <p className="text-gray-300 text-lg">{course.fullDescription}</p>
              
              <div className="flex flex-wrap gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FFD700]" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFD700]" />
                  <span>{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#FFD700]" />
                  <span>Certificate</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-white">
                  ₹{course.price.toLocaleString()}
                </div>
                <div className="text-xl text-gray-400 line-through">
                  ₹{course.originalPrice.toLocaleString()}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
                  onClick={handleEnroll}
                >
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Preview Course
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                  <span>Full lifetime access</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                  <span>Access on mobile and TV</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#001F3F] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {course.instructor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#001F3F]">{course.instructor.name}</p>
                    <p className="text-sm text-gray-500">{course.instructor.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="content" className="space-y-8">
            <TabsList className="bg-white p-1 rounded-lg">
              <TabsTrigger value="content" className="data-[state=active]:bg-[#001F3F] data-[state=active]:text-white">
                Course Content
              </TabsTrigger>
              <TabsTrigger value="learn" className="data-[state=active]:bg-[#001F3F] data-[state=active]:text-white">
                What You'll Learn
              </TabsTrigger>
              <TabsTrigger value="instructor" className="data-[state=active]:bg-[#001F3F] data-[state=active]:text-white">
                Instructor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4">
              <h2 className="text-2xl font-bold text-[#001F3F]">Course Content</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                {course.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#FFD700]/20 rounded-full flex items-center justify-center text-[#001F3F] font-semibold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-[#001F3F] font-medium">{lesson.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Play className="w-4 h-4" />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="learn">
              <h2 className="text-2xl font-bold text-[#001F3F] mb-6">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#001F3F] mt-8 mb-4">Prerequisites</h3>
              <div className="space-y-2">
                {course.prerequisites.map((prereq, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
                    <span>{prereq}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="instructor">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-[#001F3F] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-3xl">
                      {course.instructor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#001F3F]">{course.instructor.name}</h3>
                    <p className="text-[#FFD700] font-medium mb-4">{course.instructor.role}</p>
                    <p className="text-gray-600 leading-relaxed">{course.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Course Includes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">
            This course includes:
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Play, label: `${course.lessons.length} detailed lessons` },
              { icon: Download, label: 'Downloadable resources' },
              { icon: Award, label: 'Practical assignments' },
              { icon: Monitor, label: 'Real-world projects' },
              { icon: MessageCircle, label: '24/7 community support' },
              { icon: Award, label: 'Certificate of completion' },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#001F3F]" />
                  </div>
                  <p className="text-sm text-gray-600">{item.label}</p>
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
            Ready to start learning?
          </h2>
          <p className="text-gray-300 mb-8">
            Enroll now and get instant access to all course materials, projects, and community support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
              onClick={handleEnroll}
            >
              Enroll Now - ₹{course.price.toLocaleString()}
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link to="/courses">Explore Other Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
