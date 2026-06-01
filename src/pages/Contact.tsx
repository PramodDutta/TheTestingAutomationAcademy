import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'TheTestingAutomationAcademy@gmail.com',
      link: 'mailto:TheTestingAutomationAcademy@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '7827497672',
      link: 'tel:7827497672',
      subtitle: 'Mon-Fri, 9am-6pm IST',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '2nd Floor, G1533, UTTAM NAGAR, NEW DELHI',
      subtitle: '110059, India',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#001F3F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our courses? Need help with enrollment? We're here to help you on your testing journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#001F3F] mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out to us through any of the following channels. Our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-[#001F3F]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#001F3F]">{item.title}</h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-gray-600 hover:text-[#FFD700] transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.content}</p>
                          )}
                          {item.subtitle && (
                            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.subtitle}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-[#001F3F] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#001F3F] rounded-full flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#001F3F] transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#001F3F] mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Message subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.236848763986!2d77.0571155!3d28.6219127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d2c0b7e9d7%3A0x3f3f3f3f3f3f3f3f!2sUttam%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
      </section>
    </div>
  );
}
