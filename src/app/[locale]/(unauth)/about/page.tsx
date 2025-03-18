import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { FaGithub, FaCheckCircle, FaUsers, FaHospital } from 'react-icons/fa';
import HeaderWrapper from '@/components/HeaderWrapper';
import Footer from '@/components/Footer';

export async function generateMetadata(props: { params: { locale: string } }) {
  // We're using static metadata instead of translations
  await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: 'About Kind Health | Our Mission and Values',
    description: 'Learn about Kind Health, our mission to improve healthcare communication, and our commitment to data privacy and open source development.',
  };
}

export default function About() {

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWrapper />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforming Healthcare Communication
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                At Kind Health, we're on a mission to eliminate communication barriers between patients and healthcare providers, making healthcare more accessible, efficient, and human-centered.
              </p>
              <Link 
                href="/get-started" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Join Our Mission
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/images/riga.jpg"
                  alt="Doctor and patient with AI assistance"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe that better communication leads to better healthcare outcomes. Our AI-powered platform bridges the gap between patients and healthcare providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Patients</h3>
              <p className="text-gray-700">
                We empower patients with clear, accessible information and support, ensuring they feel heard and understood throughout their healthcare journey.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaHospital className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Doctors</h3>
              <p className="text-gray-700">
                We provide healthcare professionals with AI tools that reduce administrative burden, enhance patient interactions, and improve diagnostic accuracy.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaCheckCircle className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Healthcare</h3>
              <p className="text-gray-700">
                We're building a more efficient, accessible, and human-centered healthcare system through innovative AI solutions and open collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-wide">About Kind Health</h2>
            <div className="w-24 h-0.5 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're building the future of healthcare communication with a focus on privacy, accessibility, and open collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mr-5">
                  <span className="font-light text-blue-600 text-4xl">01</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 tracking-wide">Riga Startup Program</h3>
              </div>
              <p className="text-gray-700 font-light text-lg leading-relaxed pl-20">
                Proud member of the Riga Startup Program, supporting innovation in healthcare technology and contributing to Latvia's growing tech ecosystem.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mr-5">
                  <span className="font-light text-blue-600 text-4xl">02</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 tracking-wide">Based in EU</h3>
              </div>
              <p className="text-gray-700 font-light text-lg leading-relaxed pl-20">
                Headquartered in Riga, Latvia, with operations throughout the European Union, embracing European values of privacy and innovation.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mr-5">
                  <span className="font-light text-blue-600 text-4xl">03</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 tracking-wide">Data Compliance</h3>
              </div>
              <p className="text-gray-700 font-light text-lg leading-relaxed pl-20">
                GDPR compliant with strict data protection policies and HIPAA-aligned security measures, ensuring your data is always protected and respected.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mr-5">
                  <span className="font-light text-blue-600 text-4xl">04</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 tracking-wide">Open Source</h3>
              </div>
              <p className="text-gray-700 font-light text-lg leading-relaxed pl-20 mb-4">
                Committed to open source principles and collaborative development, making healthcare technology accessible to all.
              </p>
              <div className="pl-20">
                <a 
                  href="https://github.com/KindHealthTech/v2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 inline-flex items-center text-lg font-light"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Values */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At Kind Health, our work is guided by a set of core principles that shape everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered Design</h3>
                <p className="text-gray-700">
                  We design all our solutions with patients at the center, ensuring that technology enhances rather than replaces the human elements of healthcare.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ethical AI Development</h3>
                <p className="text-gray-700">
                  We are committed to developing AI that is transparent, fair, and respects human autonomy in all healthcare decisions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Privacy</h3>
                <p className="text-gray-700">
                  We maintain the highest standards of data privacy and security, treating patient information with the utmost care and respect.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Innovation</h3>
                <p className="text-gray-700">
                  We believe in the power of open collaboration, working with healthcare providers, patients, and developers to create better solutions together.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/get-started" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
