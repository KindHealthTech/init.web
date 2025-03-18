import Link from 'next/link';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaRegBuilding, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import HeaderWrapper from '@/components/HeaderWrapper';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Kind Health | Get in Touch',
  description: 'Contact Kind Health for inquiries about our healthcare AI solutions. Reach out to our team for support, partnerships, or investment opportunities.',
  keywords: 'contact Kind Health, healthcare AI contact, medical technology support',
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Get in Touch
            </h1>
            <div className="w-24 h-0.5 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Have questions about our healthcare AI solutions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company Information */}
            <div className="bg-blue-50 rounded-2xl p-10 shadow-md">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">Company Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaRegBuilding className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-light text-gray-900 mb-1">Kind Health Tech EU</h3>
                    <p className="text-gray-700 font-light">
                      Registration Number: 40203579735
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-light text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-700 font-light">
                      Dzirnavu iela 91 k-3, Riga, LV-1011, Latvia
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/Xo8Vp5ZQwcLXdKZC7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 inline-block mt-2 font-light"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-light text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700 font-light">
                      +371 2624 6129
                    </p>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="pt-4 mt-6 border-t border-blue-100">
                  <h3 className="text-xl font-light text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/company/kindhealthtech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a 
                      href="https://twitter.com/kindhealthtech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                    <a 
                      href="https://github.com/KindHealthTech/v2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Email Contacts */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">Email Us</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-light text-gray-900">General Inquiries</h3>
                  </div>
                  <p className="text-gray-700 font-light mb-4">
                    For general questions about our products and services.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-gray-900 font-medium mb-2 sm:mb-0">contact@kindhealth.tech</p>
                    <a 
                      href="mailto:contact@kindhealth.tech" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-light rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-light text-gray-900">Investor Relations</h3>
                  </div>
                  <p className="text-gray-700 font-light mb-4">
                    For investment opportunities and partnership inquiries.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-gray-900 font-medium mb-2 sm:mb-0">investor@kindhealth.tech</p>
                    <a 
                      href="mailto:investor@kindhealth.tech" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-light rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-light text-gray-900">Support</h3>
                  </div>
                  <p className="text-gray-700 font-light mb-4">
                    For technical support and assistance with our products.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-gray-900 font-medium mb-2 sm:mb-0">support@kindhealth.tech</p>
                    <a 
                      href="mailto:support@kindhealth.tech" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-light rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">Find Us</h2>
            <div className="w-24 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.8662338486!2d24.12292491590819!3d56.95139498089503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd7a81eec83%3A0xf5a9f255d5dcd5e7!2sDzirnavu%20iela%2091%20k-3%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1011%2C%20Latvia!5e0!3m2!1sen!2sus!4v1647615879652!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Kind Health Tech EU Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">Ready to Transform Healthcare?</h2>
          <p className="text-xl font-light text-gray-700 mb-8 max-w-3xl mx-auto">
            Join our network of healthcare providers using AI to enhance patient care and improve outcomes.
          </p>
          <Link 
            href="/get-started" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
