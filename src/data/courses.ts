export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  instructor: {
    name: string;
    role: string;
    bio: string;
  };
  image: string;
  lessons: Lesson[];
  whatYouLearn: string[];
  prerequisites: string[];
  includes: string[];
}

export interface Lesson {
  title: string;
  duration: string;
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'manual-testing-masterclass',
    title: 'Manual Testing Masterclass',
    description: 'Complete guide to master Manual Testing with JIRA, SQL, API Testing and real-world projects.',
    fullDescription: 'This comprehensive Manual Testing Masterclass will take you from the fundamentals to becoming a job-ready software tester. With real-world projects, JIRA integration, SQL training, and API testing techniques, you\'ll be equipped with all the skills needed in today\'s testing industry. Our hands-on approach ensures you\'ll be ready to apply your knowledge in real testing scenarios.',
    level: 'Beginner',
    duration: '2.5 months',
    price: 3999,
    originalPrice: 39999,
    rating: 5.0,
    instructor: {
      name: 'Rahul Sharma',
      role: 'Lead QA Engineer',
      bio: 'With over 10 years of experience in software testing, Rahul has worked with major tech companies and has helped hundreds of students transition into successful testing careers.',
    },
    image: '/images/course-manual-testing.jpg',
    lessons: [
      { title: 'Introduction to Software Testing', duration: '2 hours' },
      { title: 'Software Development Lifecycle (SDLC)', duration: '2 hours' },
      { title: 'Software Testing Lifecycle (STLC)', duration: '3 hours' },
      { title: 'Test Case Design Techniques', duration: '4 hours' },
      { title: 'JIRA for Test Management', duration: '4 hours' },
      { title: 'SQL Fundamentals for Testers', duration: '5 hours' },
      { title: 'API Testing Basics', duration: '3 hours' },
      { title: 'Mobile Application Testing', duration: '3 hours' },
      { title: 'Real-world Project: E-commerce Application Testing', duration: '10 hours' },
      { title: 'Real-world Project: Banking Application Testing', duration: '10 hours' },
    ],
    whatYouLearn: [
      'Understand the complete software testing lifecycle',
      'Create effective test cases and test plans',
      'Master JIRA for defect tracking and project management',
      'Develop SQL skills for database testing',
      'Perform manual API testing effectively',
      'Execute real-world testing projects from start to finish',
      'Understand mobile testing fundamentals',
      'Create comprehensive test documentation',
    ],
    prerequisites: [
      'Basic computer knowledge',
      'No prior testing experience required',
      'Interest in software quality assurance',
    ],
    includes: [
      '10 detailed lessons',
      'Downloadable resources',
      'Practical assignments',
      'Real-world projects',
      '24/7 community support',
      'Certificate of completion',
    ],
  },
  {
    id: '2',
    slug: 'api-testing-postman',
    title: 'API Testing with Postman',
    description: 'Learn how to test APIs using Postman with real-world examples and projects.',
    fullDescription: 'Master the art of API testing with Postman. This course covers everything from basic API concepts to advanced testing techniques. You\'ll learn how to create comprehensive API test suites, automate testing workflows, and integrate with CI/CD pipelines.',
    level: 'Intermediate',
    duration: '1.5 months',
    price: 4999,
    originalPrice: 29999,
    rating: 5.0,
    instructor: {
      name: 'Priya Patel',
      role: 'API Testing Specialist',
      bio: 'Priya has 8+ years of experience in API testing and has worked with REST and GraphQL APIs for major fintech companies.',
    },
    image: '/images/course-api-testing.jpg',
    lessons: [
      { title: 'Introduction to APIs and REST', duration: '2 hours' },
      { title: 'Postman Basics and Setup', duration: '3 hours' },
      { title: 'Creating and Managing Collections', duration: '3 hours' },
      { title: 'Writing Test Scripts in Postman', duration: '4 hours' },
      { title: 'Data-Driven Testing with Postman', duration: '3 hours' },
      { title: 'API Authentication Methods', duration: '3 hours' },
      { title: 'CI/CD Integration', duration: '2 hours' },
      { title: 'Real-world API Testing Project', duration: '8 hours' },
    ],
    whatYouLearn: [
      'Understand REST API concepts',
      'Master Postman for API testing',
      'Write automated API tests',
      'Implement data-driven testing',
      'Handle various authentication methods',
      'Integrate with CI/CD pipelines',
    ],
    prerequisites: [
      'Basic understanding of HTTP',
      'Familiarity with JSON',
      'Some testing experience preferred',
    ],
    includes: [
      '8 detailed lessons',
      'Postman collection templates',
      'Practice APIs',
      'Real-world projects',
      'Certificate of completion',
    ],
  },
  {
    id: '3',
    slug: 'automation-testing-java',
    title: 'Automation Testing with Java',
    description: 'Master Selenium WebDriver, TestNG, Maven and become a SDET from zero to hero.',
    fullDescription: 'Transform your career with our comprehensive Automation Testing with Java course. Starting from Java fundamentals, you\'ll progress to advanced automation frameworks using Selenium, TestNG, and Maven. By the end of the course, you\'ll be equipped with the skills to design, develop, and maintain robust test automation frameworks as a Software Development Engineer in Test (SDET).',
    level: 'Advanced',
    duration: '4 months',
    price: 9999,
    originalPrice: 49999,
    rating: 5.0,
    instructor: {
      name: 'Vikram Singh',
      role: 'Senior SDET',
      bio: 'Vikram is a seasoned SDET with 12+ years of experience building automation frameworks for enterprise applications.',
    },
    image: '/images/course-automation-java.jpg',
    lessons: [
      { title: 'Java Programming Fundamentals', duration: '10 hours' },
      { title: 'Object-Oriented Programming in Java', duration: '8 hours' },
      { title: 'Java Collections Framework', duration: '6 hours' },
      { title: 'Introduction to Selenium WebDriver', duration: '5 hours' },
      { title: 'Advanced Selenium Techniques', duration: '8 hours' },
      { title: 'TestNG Framework', duration: '6 hours' },
      { title: 'Page Object Model Design Pattern', duration: '7 hours' },
      { title: 'Maven and Build Management', duration: '4 hours' },
      { title: 'Data-Driven Testing', duration: '5 hours' },
      { title: 'API Testing with REST Assured', duration: '8 hours' },
      { title: 'Jenkins Integration and CI/CD', duration: '5 hours' },
      { title: 'BDD with Cucumber', duration: '8 hours' },
      { title: 'Final Project: End-to-End Framework', duration: '15 hours' },
    ],
    whatYouLearn: [
      'Master Java programming from basics to advanced',
      'Build robust Selenium automation frameworks',
      'Implement Page Object Model design pattern',
      'Create data-driven test suites',
      'Integrate with CI/CD pipelines',
      'Develop BDD tests with Cucumber',
      'Design enterprise-grade automation solutions',
    ],
    prerequisites: [
      'Basic programming knowledge',
      'Understanding of software testing',
      'Familiarity with HTML/CSS',
    ],
    includes: [
      '13 detailed lessons',
      'Framework templates',
      'Code repositories',
      'Real-world projects',
      'Certificate of completion',
    ],
  },
  {
    id: '4',
    slug: 'performance-testing-jmeter',
    title: 'Performance Testing with JMeter',
    description: 'Learn how to perform load testing, stress testing, and performance optimization using Apache JMeter.',
    fullDescription: 'Become a performance testing expert with Apache JMeter. Learn to design, execute, and analyze performance tests for web applications, APIs, and databases.',
    level: 'Intermediate',
    duration: '2 months',
    price: 16999,
    originalPrice: 42999,
    rating: 5.0,
    instructor: {
      name: 'Anita Desai',
      role: 'Performance Test Architect',
      bio: 'Anita specializes in performance testing for high-traffic applications and has optimized systems handling millions of users.',
    },
    image: '/images/course-performance.jpg',
    lessons: [
      { title: 'Performance Testing Fundamentals', duration: '3 hours' },
      { title: 'JMeter Installation and Setup', duration: '2 hours' },
      { title: 'Creating Test Plans', duration: '4 hours' },
      { title: 'Load and Stress Testing', duration: '5 hours' },
      { title: 'API Performance Testing', duration: '4 hours' },
      { title: 'Database Performance Testing', duration: '4 hours' },
      { title: 'Results Analysis and Reporting', duration: '4 hours' },
      { title: 'Real-world Performance Project', duration: '10 hours' },
    ],
    whatYouLearn: [
      'Design effective performance test strategies',
      'Master JMeter for load testing',
      'Analyze performance bottlenecks',
      'Generate comprehensive reports',
      'Optimize application performance',
    ],
    prerequisites: [
      'Basic testing knowledge',
      'Understanding of web applications',
      'Some programming experience',
    ],
    includes: [
      '8 detailed lessons',
      'JMeter templates',
      'Test scripts',
      'Real-world projects',
      'Certificate of completion',
    ],
  },
  {
    id: '5',
    slug: 'mobile-app-testing',
    title: 'Mobile App Testing',
    description: 'Comprehensive guide to testing mobile applications on iOS and Android platforms using industry-standard tools.',
    fullDescription: 'Master mobile application testing for both iOS and Android platforms. Learn manual and automated testing techniques using Appium and other industry tools.',
    level: 'Intermediate',
    duration: '2 months',
    price: 12999,
    originalPrice: 32999,
    rating: 5.0,
    instructor: {
      name: 'Karthik Rajan',
      role: 'Mobile QA Lead',
      bio: 'Karthik has tested 100+ mobile apps across various domains including fintech, healthcare, and e-commerce.',
    },
    image: '/images/course-mobile.jpg',
    lessons: [
      { title: 'Mobile Testing Fundamentals', duration: '3 hours' },
      { title: 'iOS and Android Platform Basics', duration: '3 hours' },
      { title: 'Manual Mobile Testing Techniques', duration: '4 hours' },
      { title: 'Appium Setup and Configuration', duration: '4 hours' },
      { title: 'Writing Mobile Automation Scripts', duration: '5 hours' },
      { title: 'Device Cloud Testing', duration: '3 hours' },
      { title: 'Mobile Performance Testing', duration: '3 hours' },
      { title: 'Real-world Mobile Testing Project', duration: '10 hours' },
    ],
    whatYouLearn: [
      'Test mobile apps on iOS and Android',
      'Master Appium for mobile automation',
      'Handle mobile-specific challenges',
      'Test on device clouds',
      'Optimize mobile app performance',
    ],
    prerequisites: [
      'Basic testing knowledge',
      'Familiarity with mobile apps',
      'Some automation experience helpful',
    ],
    includes: [
      '8 detailed lessons',
      'Appium frameworks',
      'Test scripts',
      'Real-world projects',
      'Certificate of completion',
    ],
  },
  {
    id: '6',
    slug: 'devops-for-testers',
    title: 'DevOps for Testers',
    description: 'Learn CI/CD pipelines, Docker, Jenkins, and how to integrate automated tests into the DevOps workflow.',
    fullDescription: 'Bridge the gap between testing and DevOps. Learn how to integrate your tests into CI/CD pipelines, containerize test environments, and implement continuous testing practices.',
    level: 'Advanced',
    duration: '3 months',
    price: 21999,
    originalPrice: 54999,
    rating: 5.0,
    instructor: {
      name: 'Suresh Kumar',
      role: 'DevOps Architect',
      bio: 'Suresh has implemented DevOps practices for multiple organizations and specializes in test automation integration.',
    },
    image: '/images/course-devops.jpg',
    lessons: [
      { title: 'DevOps Fundamentals', duration: '4 hours' },
      { title: 'Docker for Testers', duration: '6 hours' },
      { title: 'Jenkins Pipeline Creation', duration: '6 hours' },
      { title: 'Git and Version Control', duration: '4 hours' },
      { title: 'CI/CD for Test Automation', duration: '6 hours' },
      { title: 'Test Environment Management', duration: '4 hours' },
      { title: 'Monitoring and Reporting', duration: '4 hours' },
      { title: 'Final DevOps Project', duration: '12 hours' },
    ],
    whatYouLearn: [
      'Implement CI/CD pipelines',
      'Containerize test environments',
      'Integrate tests with Jenkins',
      'Manage test infrastructure',
      'Set up continuous testing',
    ],
    prerequisites: [
      'Automation testing experience',
      'Basic Linux knowledge',
      'Understanding of version control',
    ],
    includes: [
      '8 detailed lessons',
      'Pipeline templates',
      'Docker configurations',
      'Real-world projects',
      'Certificate of completion',
    ],
  },
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find((course) => course.slug === slug);
};

export const testimonials = [
  {
    id: 1,
    name: 'Aisha Patel',
    role: 'SDET at Microsoft',
    image: '/images/testimonial-1.jpg',
    content: 'TheTestingAutomationAcademy helped me transition from manual to automation testing. The live projects and instructor support were amazing. I landed a job at Microsoft within 2 months of completing the course!',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Kim',
    role: 'QA Engineer at Google',
    image: '/images/testimonial-2.jpg',
    content: 'The API automation course was exactly what I needed to advance my career. The instructor\'s approach to teaching complex concepts in a simple way is outstanding. Highly recommend it!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Test Lead at Amazon',
    image: '/images/testimonial-3.jpg',
    content: 'I was a complete beginner when I joined TheTestingAutomationAcademy. The Manual Testing course gave me a solid foundation and the hands-on projects prepared me for real-world scenarios. Now I\'m leading a QA team!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Mike Robertson',
    role: 'Automation Engineer at Facebook',
    image: '/images/testimonial-4.jpg',
    content: 'The Selenium with Java course was comprehensive and practical. I particularly appreciated the emphasis on framework design and best practices. It\'s been instrumental in my career growth.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'Do I need prior programming experience?',
    answer: 'It depends on the course. Our Manual Testing course doesn\'t require programming experience, but for Automation Testing courses, basic programming knowledge is recommended. Don\'t worry though - we offer preparatory modules for beginners.',
  },
  {
    question: 'How are the classes conducted?',
    answer: 'All our courses are conducted online through live interactive sessions. Classes are recorded, so you can revisit them later. We also include hands-on labs, assignments, and group projects.',
  },
  {
    question: 'Do you provide job assistance?',
    answer: 'Yes! We offer comprehensive job assistance including resume building, mock interviews, and access to our network of hiring partners. Our Career Services team works closely with students to prepare them for job opportunities.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we offer a 7-day money-back guarantee for all our courses. If you\'re not satisfied with the course content within the first week, you can request a full refund. Please refer to our Refund Policy for more details.',
  },
  {
    question: 'How long do I have access to the course?',
    answer: 'You get lifetime access to the course content, including all future updates. This allows you to learn at your own pace and revisit the material whenever you need.',
  },
  {
    question: 'Will I get a certificate?',
    answer: 'Yes, upon successful completion of the course, you will receive a certificate of completion that you can add to your resume and LinkedIn profile.',
  },
];
