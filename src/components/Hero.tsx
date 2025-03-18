'use client';

import React, { useState } from 'react';
import { FaBell, FaUser, FaSearch, FaCalendarAlt, FaChartLine, FaClipboardList, FaExclamationTriangle } from 'react-icons/fa';

const sections = [
  {
    id: 1,
    title: 'Streamlined Doctor Dashboard',
    description:
      'Monitor your patients with our intuitive dashboard. Track patient status, receive alerts, and manage your practice efficiently.',
    component: DoctorDashboard,
  },
  {
    id: 2,
    title: 'AI-Powered Patient Communication',
    description:
      'Our AI assistant helps patients understand their symptoms and suggests appropriate next steps, improving patient engagement and outcomes.',
    component: PatientAIInteraction,
  },
  {
    id: 3,
    title: 'Seamless Doctor Intervention',
    description:
      'Doctors can easily review AI interactions and intervene when necessary, ensuring patients receive the highest quality care.',
    component: DoctorIntervention,
  },
];

// Doctor Dashboard Component
function DoctorDashboard() {
  return (
    <div className="relative w-full max-w-[380px] h-[680px] mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800" style={{ transform: 'scale(0.9)' }}>
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-10"></div>
      
      {/* App Header */}
      <div className="pt-10 pb-4 px-5 bg-blue-600 text-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">Dr. Sarah's Dashboard</h3>
            <p className="text-sm text-blue-100">Monday, March 18</p>
          </div>
          <div className="relative">
            <FaBell className="text-xl" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px]">3</span>
          </div>
        </div>
        
        <div className="flex bg-blue-700 rounded-lg p-2 items-center">
          <FaSearch className="text-blue-300 mr-2" />
          <span className="text-blue-300 text-sm">Search patients...</span>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="p-4 h-[calc(100%-180px)] overflow-y-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-blue-50 p-3 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Today's Patients</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUser className="text-blue-600 text-sm" />
              </div>
            </div>
            <p className="text-2xl font-semibold text-gray-800 mt-2">12</p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Appointments</span>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FaCalendarAlt className="text-green-600 text-sm" />
              </div>
            </div>
            <p className="text-2xl font-semibold text-gray-800 mt-2">8</p>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Patient Msgs</span>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <FaChartLine className="text-purple-600 text-sm" />
              </div>
            </div>
            <p className="text-2xl font-semibold text-gray-800 mt-2">5</p>
          </div>
          
          <div className="bg-amber-50 p-3 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Pending Tests</span>
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <FaClipboardList className="text-amber-600 text-sm" />
              </div>
            </div>
            <p className="text-2xl font-semibold text-gray-800 mt-2">3</p>
          </div>
        </div>
        
        {/* Alerts Section */}
        <div className="mb-5">
          <h4 className="text-gray-700 font-medium mb-2 flex items-center">
            <FaExclamationTriangle className="text-amber-500 mr-2" />
            Priority Alerts
          </h4>
          
          <div className="bg-red-50 p-3 rounded-xl mb-2 border-l-4 border-red-500">
            <h5 className="text-red-700 font-medium">Emma Johnson - Urgent</h5>
            <p className="text-sm text-gray-700">Reported severe chest pain and shortness of breath</p>
            <div className="flex justify-end mt-1">
              <button className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-md">Review Now</button>
            </div>
          </div>
          
          <div className="bg-amber-50 p-3 rounded-xl border-l-4 border-amber-500">
            <h5 className="text-amber-700 font-medium">Michael Chen - High</h5>
            <p className="text-sm text-gray-700">Abnormal blood test results require follow-up</p>
            <div className="flex justify-end mt-1">
              <button className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-md">Review</button>
            </div>
          </div>
        </div>
        
        {/* Patient List */}
        <div>
          <h4 className="text-gray-700 font-medium mb-2">Today's Patients</h4>
          
          <div className="space-y-2">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-medium">EJ</span>
              </div>
              <div className="flex-1">
                <h5 className="text-gray-800 font-medium">Emma Johnson</h5>
                <p className="text-xs text-gray-500">10:30 AM - Chest Pain</p>
              </div>
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Urgent</span>
            </div>
            
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 font-medium">MC</span>
              </div>
              <div className="flex-1">
                <h5 className="text-gray-800 font-medium">Michael Chen</h5>
                <p className="text-xs text-gray-500">11:15 AM - Follow-up</p>
              </div>
              <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">High</span>
            </div>
            
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-medium">SG</span>
              </div>
              <div className="flex-1">
                <h5 className="text-gray-800 font-medium">Sarah Garcia</h5>
                <p className="text-xs text-gray-500">1:00 PM - Routine Check</p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Normal</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around">
        <button className="p-2 text-blue-600">
          <FaUser className="text-xl" />
        </button>
        <button className="p-2 text-gray-400">
          <FaCalendarAlt className="text-xl" />
        </button>
        <button className="p-2 text-gray-400">
          <FaChartLine className="text-xl" />
        </button>
        <button className="p-2 text-gray-400">
          <FaClipboardList className="text-xl" />
        </button>
      </div>
    </div>
  );
}

// Patient-AI Interaction Component
function PatientAIInteraction() {
  return (
    <div className="relative w-full max-w-[380px] h-[680px] mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800" style={{ transform: 'scale(0.9)' }}>
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-10"></div>
      
      {/* Chat Header */}
      <div className="pt-10 pb-4 px-5 bg-blue-600 text-white">
        <div className="flex items-center">
          <button className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-medium">KH</span>
            </div>
            <div>
              <h3 className="font-semibold">Kind Health AI</h3>
              <p className="text-xs text-blue-100">Online</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="p-4 h-[calc(100%-180px)] bg-gray-100 overflow-y-auto">
        <div className="space-y-4">
          {/* Time Indicator */}
          <div className="flex justify-center">
            <span className="text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded-full">Today, 10:42 AM</span>
          </div>
          
          {/* Patient Message */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg rounded-tr-none max-w-[80%]">
              <p className="text-sm">Hi, I've been having headaches for the past 3 days. They seem to get worse in the evening. Should I be concerned?</p>
            </div>
          </div>
          
          {/* AI Response */}
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
              <p className="text-sm text-gray-800 mb-2">I understand you're experiencing headaches that worsen in the evening. There are several possible causes for this pattern.</p>
              <p className="text-sm text-gray-800 mb-2">Some questions that might help us understand better:</p>
              <ul className="text-sm text-gray-800 list-disc pl-5 mb-2">
                <li>Are you experiencing any other symptoms?</li>
                <li>How would you rate the pain on a scale of 1-10?</li>
                <li>Have you taken any medication for it?</li>
              </ul>
              <p className="text-sm text-gray-800">Based on your description, I'd suggest monitoring your hydration, screen time in the evening, and stress levels as these can contribute to headaches.</p>
            </div>
          </div>
          
          {/* Patient Response */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg rounded-tr-none max-w-[80%]">
              <p className="text-sm">The pain is about 6/10. I've taken some ibuprofen but it only helps temporarily. I've also been feeling a bit dizzy when I stand up quickly.</p>
            </div>
          </div>
          
          {/* AI Suggestion */}
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
              <p className="text-sm text-gray-800 mb-2">Thank you for providing more details. The combination of headaches and dizziness when standing up could indicate several things:</p>
              <ul className="text-sm text-gray-800 list-disc pl-5 mb-2">
                <li>Dehydration</li>
                <li>Low blood pressure</li>
                <li>Inner ear issues</li>
                <li>Medication side effects</li>
              </ul>
              <p className="text-sm text-gray-800 mb-2">Given your symptoms, I would suggest:</p>
              <div className="bg-blue-50 p-2 rounded-md mb-2">
                <p className="text-sm font-medium text-blue-700">Recommended Actions:</p>
                <ul className="text-sm text-blue-800 list-disc pl-5">
                  <li>Increase your water intake</li>
                  <li>Monitor your symptoms for the next 24 hours</li>
                  <li>Schedule a consultation with your doctor if symptoms persist or worsen</li>
                </ul>
              </div>
              <p className="text-sm text-gray-800">Would you like me to help you schedule an appointment with Dr. Sarah?</p>
            </div>
          </div>
          
          {/* Typing Indicator */}
          <div className="flex justify-start">
            <div className="bg-gray-200 p-3 rounded-full">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Message Input */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="ml-2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Doctor Intervention Component
function DoctorIntervention() {
  return (
    <div className="relative w-full max-w-[380px] h-[680px] mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800" style={{ transform: 'scale(0.9)' }}>
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-10"></div>
      
      {/* Chat Header */}
      <div className="pt-10 pb-4 px-5 bg-blue-600 text-white">
        <div className="flex items-center">
          <button className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-medium">KH</span>
            </div>
            <div>
              <h3 className="font-semibold">Patient Chat</h3>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                <p className="text-xs text-blue-100">Dr. Sarah & AI Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="p-4 h-[calc(100%-180px)] bg-gray-100 overflow-y-auto">
        <div className="space-y-4">
          {/* Previous Messages Summary */}
          <div className="bg-gray-200 p-2 rounded-lg text-xs text-gray-600 text-center">
            <p>Previous conversation about headaches and dizziness</p>
            <button className="text-blue-600 underline">View full history</button>
          </div>
          
          {/* Patient Message */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg rounded-tr-none max-w-[80%]">
              <p className="text-sm">Yes, I'd like to schedule an appointment. The dizziness is getting worse and I'm feeling nauseous now too.</p>
            </div>
          </div>
          
          {/* AI Response */}
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
              <div className="flex items-center mb-1">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                  <span className="text-blue-600 text-xs font-bold">AI</span>
                </div>
                <p className="text-xs text-gray-500">Kind Health AI</p>
              </div>
              <p className="text-sm text-gray-800 mb-2">I understand your symptoms are worsening. The addition of nausea along with headaches and dizziness could indicate several conditions that require medical attention.</p>
              <p className="text-sm text-gray-800">I'll notify Dr. Sarah about your symptoms right away. In the meantime, please try to rest in a quiet, dark room and stay hydrated.</p>
            </div>
          </div>
          
          {/* Doctor Alert */}
          <div className="bg-amber-50 p-2 rounded-lg text-xs text-amber-700 text-center border border-amber-200">
            <p>Dr. Sarah has been notified and is reviewing your case</p>
          </div>
          
          {/* Doctor Response */}
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-sm border-l-4 border-green-500">
              <div className="flex items-center mb-1">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-1">
                  <span className="text-green-600 text-xs font-bold">DR</span>
                </div>
                <p className="text-xs text-gray-500">Dr. Sarah Johnson</p>
              </div>
              <p className="text-sm text-gray-800 mb-2">Hello, I've reviewed your symptoms and I'm concerned about the combination of worsening headaches, dizziness, and now nausea.</p>
              <p className="text-sm text-gray-800 mb-2">These symptoms could indicate several conditions that need proper evaluation. I'd like to see you as soon as possible.</p>
              <div className="bg-green-50 p-2 rounded-md mb-2">
                <p className="text-sm font-medium text-green-700">Medical Recommendation:</p>
                <p className="text-sm text-green-800">We should conduct a neurological examination and possibly some blood tests to rule out more serious conditions.</p>
              </div>
              <p className="text-sm text-gray-800">I have an opening today at 2:30 PM. Would that work for you?</p>
            </div>
          </div>
          
          {/* Patient Response */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg rounded-tr-none max-w-[80%]">
              <p className="text-sm">Yes, I can come in at 2:30 PM. Thank you, Dr. Sarah.</p>
            </div>
          </div>
          
          {/* Doctor Confirmation */}
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[80%] shadow-sm border-l-4 border-green-500">
              <div className="flex items-center mb-1">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-1">
                  <span className="text-green-600 text-xs font-bold">DR</span>
                </div>
                <p className="text-xs text-gray-500">Dr. Sarah Johnson</p>
              </div>
              <p className="text-sm text-gray-800 mb-2">Great, I'll see you at 2:30 PM. My assistant will send you a confirmation with the office details.</p>
              <p className="text-sm text-gray-800">In the meantime, please avoid driving and have someone accompany you to the appointment if possible.</p>
            </div>
          </div>
          
          {/* Appointment Confirmation */}
          <div className="bg-green-50 p-3 rounded-lg max-w-[80%] mx-auto border border-green-200">
            <div className="flex items-center justify-center mb-2">
              <FaCalendarAlt className="text-green-600 mr-2" />
              <p className="text-sm font-medium text-green-700">Appointment Confirmed</p>
            </div>
            <p className="text-xs text-center text-green-800">Today at 2:30 PM with Dr. Sarah Johnson</p>
            <div className="flex justify-center mt-2">
              <button className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded-md">Add to Calendar</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Message Input */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="ml-2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeSection, setActiveSection] = useState(0);

  // Function to handle section navigation
  const navigateToSection = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div className="relative bg-white">
      {/* Static sections with tabs instead of scroll-based navigation */}
      <div className="container mx-auto px-4 py-16">
        {/* Navigation tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${index === activeSection ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => navigateToSection(index)}
              >
                {section.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Section content */}
        <div className="max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`transition-all duration-500 ${index === activeSection ? 'opacity-100 block' : 'opacity-0 hidden'}`}
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 items-center">
                <div className="px-0 sm:px-6 lg:col-span-6 lg:px-0 mb-12 lg:mb-0">
                  <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
                      {section.title}
                    </h2>
                    <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-gray-600">
                      {section.description}
                    </p>
                    {index === 0 && (
                      <div className="mt-10 flex items-center gap-x-6">
                        <a
                          href="#"
                          className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-200"
                        >
                          Get started
                        </a>
                        <a
                          href="#"
                          className="text-sm font-medium leading-6 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                          Learn more <span aria-hidden="true" className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md">
                    {React.createElement(section.component)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile dots navigation (visible on smaller screens) */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeSection ? 'bg-blue-600 scale-110' : 'bg-gray-300'}`}
                onClick={() => navigateToSection(index)}
                aria-label={`Navigate to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
