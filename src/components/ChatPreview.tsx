'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { FaChevronLeft, FaEllipsisV, FaPaperPlane, FaCheck, FaCheckDouble } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
  sender: 'patient' | 'ai' | 'doctor';
  time: string;
  status?: 'sent' | 'delivered' | 'read';
  isTyping?: boolean;
  typing?: boolean;
  showNewBubbles?: boolean;
  bubbleIds?: number[];
}

// Mobile-based chat preview data
const initialMessages: Message[] = [{
    id: 1,
    text: "Hi, I've been experiencing severe headaches and dizziness for the past few days. I really need to see Dr. Smith. My previous migraines were never this bad.",
    sender: 'patient',
    time: '9:32 AM',
    status: 'read'
  },
  {
    id: 2,
    text: "I understand your concern about the increased severity. I'm Dr. Smith's AI assistant. While he's at a medical conference this week, I can help gather critical information and schedule an urgent appointment.",
    sender: 'ai',
    time: '9:33 AM'
  },
  {
    id: 3,
    text: "The headaches are mostly on one side and get worse with light. I've also been feeling nauseous. Different from my usual migraines, I'm also experiencing some numbness in my left hand.",
    sender: 'patient',
    time: '9:35 AM',
    status: 'read'
  },
  {
    id: 4,
    text: "I notice this is a new symptom compared to your previous records. Given this combination of symptoms, I'm marking this as high priority. I've scheduled an urgent appointment for tomorrow at 9 AM.",
    sender: 'ai',
    time: '9:36 AM'
  },
  {
    id: 5,
    text: "Yes, please. And thank you for checking my history and getting me in so quickly.",
    sender: 'patient',
    time: '9:37 AM',
    status: 'delivered'
  },
  {
    id: 6,
    text: "I've reviewed the AI's analysis. The combination of your usual migraine symptoms with new neurological signs needs immediate attention. I've adjusted my schedule to see you first thing tomorrow.",
    sender: 'doctor',
    time: '9:40 AM'
  },
  {
    id: 7,
    text: "Thank you both. It's reassuring to know you're monitoring my condition even while at the conference, Dr. Smith.",
    sender: 'patient',
    time: '9:41 AM',
    status: 'sent'
  }
];

// Define bubble interface
interface Bubble {
  id: number;
  title: string;
  content: string;
}

// Define message parts for the demo
const messageParts = [
  { startId: 1, endId: 3 },
  { startId: 1, endId: 5 },
  { startId: 1, endId: 7 }
];

// Define information bubbles
const infoBubbles: Bubble[] = [
  {
    id: 1,
    title: 'Patient History',
    content: 'Patient has a documented history of migraines for 5+ years, typically responding well to sumatriptan.'
  },
  {
    id: 2,
    title: 'New Symptom',
    content: 'Numbness in extremities alongside migraine symptoms can indicate more serious conditions requiring immediate evaluation.'
  },
  {
    id: 3,
    title: 'AI Analysis',
    content: 'AI flagged this as high priority based on comparison with 50,000+ similar cases in medical database.'
  }
];

export default function ChatPreview(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  // isTyping is used in the loadMessages function
  const [isTyping, setIsTyping] = useState(false);
  const [currentPart, setCurrentPart] = useState(1);
  // We'll remove currentMessageIndex as it's not being used
  const [isTransitioning, setIsTransitioning] = useState(false);
  // showBubbles is used in the JSX for conditional rendering
  const [showBubbles] = useState(true);
  const [bubbleSetIndex, setBubbleSetIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Configure bubble animations
  const bubblesTransition = useTransition(infoBubbles, {
    from: { opacity: 0, height: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, height: 'auto', transform: 'translateY(0px)' },
    leave: { opacity: 0, height: 0, transform: 'translateY(-20px)' },
    trail: 400
  });

  // Get messages for the current part
  const getCurrentPartMessages = () => {
    const part = messageParts[currentPart - 1];
    if (!part) return [];
    
    // Add bubble information to messages
    return initialMessages
      .filter(msg => msg.id >= part.startId && msg.id <= part.endId)
      .map(msg => {
        // Add bubble IDs to specific messages
        if (msg.id === 2) {
          return { ...msg, bubbleIds: [1], showNewBubbles: bubbleSetIndex >= 1 };
        } else if (msg.id === 4) {
          return { ...msg, bubbleIds: [2, 3], showNewBubbles: bubbleSetIndex >= 2 };
        }
        return msg;
      });
  };

  // Load initial messages with a typing effect
  useEffect(() => {
    const loadMessages = async () => {
      // Start with an empty array
      setMessages([]);
      
      // Add each message with a typing effect
      for (const message of initialMessages) {
        // Show typing indicator
        if (message.sender === 'ai' || message.sender === 'doctor') {
          setIsTyping(true);
          // Wait a moment before showing the message
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // Add the message
        setMessages(prev => [...prev, message]);
        setIsTyping(false);
        
        // Wait between messages
        await new Promise(resolve => setTimeout(resolve, 800));
      }
    };
    
    loadMessages();
  }, []);
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'patient',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(true);
      
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          text: "I'll relay this information to Dr. Smith. Based on your symptoms, please try to rest in a quiet, dark room and stay hydrated. Your appointment is confirmed for tomorrow at 9 AM.",
          sender: 'ai',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-white py-12">
      <h1 className="text-2xl xs:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 xs:mb-8 md:mb-12 text-center px-4 leading-tight">
        Experience AI-Powered Healthcare
      </h1>

      {/* Mobile Phone Container */}
      <div className="relative w-full max-w-[380px] h-[680px] mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800" style={{ transform: 'scale(0.9)' }}>
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-10"></div>
        
        {/* Chat Header */}
        <div className="pt-10 pb-4 px-5 bg-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="mr-2">
                <FaChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-medium">KH</span>
                </div>
                <div>
                  <h3 className="font-semibold">Patient Chat</h3>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    <p className="text-xs text-blue-100">Dr. Smith & AI Assistant</p>
                  </div>
                </div>
              </div>
            </div>
            <button>
              <FaEllipsisV className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Chat Messages Container */}
        <div 
          ref={chatContainerRef}
          className="h-[calc(100%-180px)] bg-gray-50 p-4 overflow-y-auto"
        >
          {/* Part transition spinner */}
          {isTransitioning && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-blue-600 font-medium">Loading next part...</p>
              </div>
            </div>
          )}
          <div className="flex flex-col space-y-4">
            {getCurrentPartMessages().map((message) => (
              <div key={message.id} className="mb-4">
                <div className="flex flex-col w-full">
                  {/* Message timestamp */}
                  {message.id === 1 || message.id === 4 ? (
                    <div className="text-center mb-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {message.time}
                      </span>
                    </div>
                  ) : null}
                  
                  <div
                    className={`flex ${message.sender === 'patient' ? 'justify-end' : 'justify-start'} 
                      opacity-0 animate-fade-in`}
                    style={{ animationDelay: `${message.id * 0.2}s`, animationFillMode: 'forwards' }}
                  >
                    {/* Message bubble */}
                    <div
                      className={`px-4 py-3 max-w-[85%] ${message.sender === 'patient' 
                          ? 'bg-blue-500 text-white rounded-2xl rounded-tr-none' 
                          : message.sender === 'doctor' 
                            ? 'bg-green-500 text-white rounded-2xl rounded-tl-none border-l-4 border-green-600' 
                            : 'bg-white text-gray-800 rounded-2xl rounded-tl-none shadow-sm'}`}
                    >
                      <div className="flex flex-col">
                        {message.sender !== 'patient' && (
                          <span className={`text-xs mb-1 ${message.sender === 'doctor' ? 'text-green-100' : 'text-gray-500'}`}>
                            {message.sender === 'doctor' ? 'Dr. Smith' : 'AI Assistant'}
                          </span>
                        )}
                        <p className="text-sm leading-relaxed">
                          {message.typing ? (
                            <span className="flex space-x-1">
                              <span className="animate-bounce">.</span>
                              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                            </span>
                          ) : (
                            message.text
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message status indicators for patient messages */}
                  {message.sender === 'patient' && message.status && (
                    <div className="flex justify-end mt-1">
                      <span className="text-xs text-gray-500 flex items-center">
                        {message.time}
                        {message.status === 'sent' && <FaCheck className="ml-1 text-gray-400 text-xs" />}
                        {message.status === 'delivered' && <FaCheckDouble className="ml-1 text-gray-400 text-xs" />}
                        {message.status === 'read' && <FaCheckDouble className="ml-1 text-blue-500 text-xs" />}
                      </span>
                    </div>
                  )}
                  
                  {/* Fact bubbles that appear below messages with a divider */}
                  {message.showNewBubbles && showBubbles && message.bubbleIds && (
                    <div className={`flex ${message.sender === 'patient' ? 'justify-end' : 'justify-start'} mt-1.5 mb-3`}>
                      <div className={`max-w-[85%] ${message.sender === 'patient' ? 'mr-0' : 'ml-0'}`}>
                        {bubblesTransition((style, bubble) => (
                          message.bubbleIds?.includes(bubble.id) && (
                          <animated.div
                            style={style}
                            className={`relative overflow-hidden
                              ${message.sender === 'patient' 
                                ? 'bg-blue-100 text-blue-800 border-blue-300' 
                                : message.sender === 'doctor' 
                                  ? 'bg-green-100 text-green-800 border-green-300' 
                                  : 'bg-gray-100 text-gray-800 border-gray-300'} 
                              p-2 rounded-lg border-l-2 shadow-sm`}
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 mr-2">
                                <div className={`w-4 h-4 rounded-full flex items-center justify-center 
                                  ${message.sender === 'patient' 
                                    ? 'bg-blue-300 text-blue-700' 
                                    : message.sender === 'doctor' 
                                      ? 'bg-green-300 text-green-700' 
                                      : 'bg-gray-200 text-gray-700'}`}>
                                  <span className="text-[10px] font-bold">i</span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs">
                                  <span className="font-semibold block mb-0.5">{bubble.title}</span>
                                  <span className="leading-tight text-xs">{bubble.content}</span>
                                </p>
                              </div>
                            </div>
                          </animated.div>
                        )))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Message Input */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              className="ml-2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleSendMessage}
            >
              <FaPaperPlane className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Controls outside the phone */}
      <div className="mt-8 text-center px-4 sm:px-0 flex flex-col sm:flex-row justify-center items-center gap-3">
        <button 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full sm:w-auto"
          onClick={() => {
            setMessages([]);
            setCurrentPart(1);
            setBubbleSetIndex(0);
          }}
        >
          Restart Demo
        </button>
        
        <button 
          className="px-6 py-3 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full sm:w-auto"
          onClick={() => {
            if (currentPart < messageParts.length) {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentPart(prev => prev + 1);
                setBubbleSetIndex(prev => prev + 1);
                setIsTransitioning(false);
              }, 1000);
            }
          }}
          disabled={currentPart >= messageParts.length}
        >
          Show More
        </button>
      </div>
    </div>
  );
}
