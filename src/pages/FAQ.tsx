import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/data/courses';

const additionalFaqs = [
  {
    question: 'What is the duration of the courses?',
    answer: 'Course durations vary depending on the program. Our Manual Testing Masterclass is 2.5 months, API Testing with Postman is 1.5 months, and Automation Testing with Java is 4 months. Each course page lists the specific duration.',
  },
  {
    question: 'Are the classes live or recorded?',
    answer: 'All our courses are conducted through live interactive sessions. However, all classes are recorded and made available to students for future reference. This allows you to revisit the content whenever you need.',
  },
  {
    question: 'What if I miss a live class?',
    answer: 'No worries! All live classes are recorded and uploaded to the learning platform within 24 hours. You can watch the recording at your convenience and reach out to the instructor if you have any questions.',
  },
  {
    question: 'Do you provide placement assistance?',
    answer: 'Yes, we provide comprehensive placement assistance including resume building, interview preparation, mock interviews, and access to our network of hiring partners. Our career services team works closely with students to help them secure job opportunities.',
  },
  {
    question: 'Will I get a certificate after completing the course?',
    answer: 'Yes, upon successful completion of the course, you will receive a certificate of completion that you can add to your resume and LinkedIn profile. The certificate is recognized by many companies in the industry.',
  },
  {
    question: 'Can I pay in installments?',
    answer: 'Yes, we offer flexible payment options including EMI (Equated Monthly Installments) for select courses. Please contact our support team for more details on installment options.',
  },
  {
    question: 'What are the system requirements for the courses?',
    answer: 'You will need a computer with a stable internet connection (minimum 2 Mbps), a modern web browser, and for some courses, specific software which will be mentioned in the course description. Most of our courses require Windows, Mac, or Linux operating systems.',
  },
  {
    question: 'Is there any support available during the course?',
    answer: 'Absolutely! We provide 24/7 community support through our dedicated Discord/Slack channels. You can also reach out to instructors during live sessions and through our support portal for any queries.',
  },
];

const allFaqs = [...faqs, ...additionalFaqs];

export default function FAQ() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001F3F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our courses, enrollment, and more
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {allFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-[#001F3F] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-8">
            If you couldn't find the answer you're looking for, please feel free to contact our support team.
          </p>
          <a
            href="mailto:TheTestingAutomationAcademy@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#FFD700] text-[#001F3F] font-semibold rounded-lg hover:bg-[#FFD700]/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
