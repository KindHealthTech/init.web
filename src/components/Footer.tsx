import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 hover:text-blue-500 transition-colors cursor-default">
              Kind Health Tech EU
            </h3>
            <p className="text-gray-600 mb-2 hover:text-blue-500 transition-colors cursor-default">
              Part of Startup Program
            </p>
            <p className="text-gray-600 hover:text-blue-500 transition-colors cursor-default">
              Riga, Latvia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-blue-500 transition-colors inline-block transform hover:translate-x-1 duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-600 hover:text-blue-500 transition-colors inline-block transform hover:translate-x-1 duration-200"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/company/kind-health-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com/kindhealthtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"
              >
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://github.com/kindhealthtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"
              >
                <FaGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm text-center group cursor-default">
            <span className="inline-block group-hover:text-blue-500 transition-colors">
              © {new Date().getFullYear()} Kind Health Tech EU. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
