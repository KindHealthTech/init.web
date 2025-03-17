'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface FactBubble {
  id: number;
  title: string;
  content: string;
  type: 'red' | 'blue';
  position: 'left' | 'right';
}

interface Message {
  id: number;
  text: string;
  sender: 'patient' | 'ai' | 'doctor';
  typing?: boolean;
  showNewBubbles?: boolean;
  part?: 1 | 2 | 3;
}

const factBubblesSet1: FactBubble[] = [
  {
    id: 1,
    title: 'Did you know?',
    content: '20% of medical diagnoses are delayed or incorrect due to incomplete patient history and data fragmentation.',
    type: 'red',
    position: 'left'
  },
  {
    id: 2,
    title: 'Solution',
    content: 'Our AI assistant maintains continuous patient monitoring and documentation, ensuring no critical information is missed.',
    type: 'blue',
    position: 'right'
  }
];

const factBubblesSet2: FactBubble[] = [
  {
    id: 3,
    title: 'Real-time Updates',
    content: 'Our AI keeps doctors informed instantly about patient interactions, ensuring continuous care even when doctors are away.',
    type: 'red',
    position: 'left'
  },
  {
    id: 4,
    title: 'Smart Notifications',
    content: 'Doctors receive prioritized alerts about urgent cases and changes in patient conditions, enabling quick interventions.',
    type: 'blue',
    position: 'right'
  }
];

const factBubblesSet3: FactBubble[] = [
  {
    id: 5,
    title: 'Continuous Learning',
    content: 'Every patient interaction helps our AI learn and improve, keeping doctors informed of emerging patterns.',
    type: 'red',
    position: 'left'
  },
  {
    id: 6,
    title: 'Doctor Integration',
    content: 'Doctors receive real-time updates and can provide feedback, creating a continuous improvement loop.',
    type: 'blue',
    position: 'right'
  }
];

const initialMessages: Message[] = [
  // Part 1: Initial Symptoms and AI Response
  {
    id: 1,
    text: "Hi, I've been experiencing severe headaches and dizziness for the past few days. I really need to see Dr. Smith. My previous migraines were never this bad.",
    sender: 'patient',
    part: 1
  },
  {
    id: 2,
    text: "I understand your concern about the increased severity. I'm Dr. Smith's AI assistant. While he's at a medical conference this week, I can help gather critical information and schedule an urgent appointment. I have access to your complete medical history.",
    sender: 'ai',
    part: 1
  },
  {
    id: 3,
    text: "The headaches are mostly on one side and get worse with light. I've also been feeling nauseous. Different from my usual migraines, I'm also experiencing some numbness in my left hand.",
    sender: 'patient',
    part: 1
  },
  // Part 2: AI Assessment and Doctor's Response
  {
    id: 4,
    text: "I notice this is a new symptom compared to your previous records. Given this combination of symptoms, I'm marking this as high priority. I'm documenting everything in your health record and have scheduled an urgent appointment for tomorrow at 9 AM.",
    sender: 'ai',
    part: 2
  },
  {
    id: 5,
    text: "Yes, please. And thank you for checking my history and getting me in so quickly.",
    sender: 'patient',
    part: 2
  },
  {
    id: 6,
    text: "You're welcome. Based on your history, I recommend finding a quiet, dark room and applying a cold compress. I've notified Dr. Smith about these new symptoms, particularly the left hand numbness.",
    sender: 'ai',
    part: 2
  },
  {
    id: 7,
    text: "I've reviewed the AI's analysis. The combination of your usual migraine symptoms with new neurological signs needs immediate attention. I've adjusted my schedule to see you first thing tomorrow.",
    sender: 'doctor',
    part: 2
  },
  // Part 3: Follow-up and Learning
  {
    id: 8,
    text: "Thank you both. It's reassuring to know you're monitoring my condition even while at the conference, Dr. Smith.",
    sender: 'patient',
    part: 3
  },
  {
    id: 9,
    text: "Based on this interaction, I've updated my diagnostic patterns to flag similar symptom combinations in other migraine patients. Dr. Smith, I've prepared a detailed report comparing this case with our database.",
    sender: 'ai',
    part: 3
  },
  {
    id: 10,
    text: "Excellent analysis. This kind of pattern recognition across our patient database is invaluable. Please add this case to our teaching database for future reference.",
    sender: 'doctor',
    part: 3
  }
];

export default function ChatPreview(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentBubbles, setCurrentBubbles] = useState<FactBubble[]>(factBubblesSet1);
  const [bubbleSetIndex, setBubbleSetIndex] = useState(0);
  const [currentPart, setCurrentPart] = useState(1);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const getCurrentPartMessages = useCallback(() => {
    return messages.filter(msg => msg.part === currentPart);
  }, [messages, currentPart]);

  const handleBubbleTransition = useCallback((nextSet: FactBubble[], nextIndex: number): Promise<boolean> => {
    let timer: NodeJS.Timeout | undefined;
    
    const cleanup = (): void => {
      if (timer) {
        clearTimeout(timer);
        timer = undefined;
      }
    };
    
    return new Promise<boolean>((resolve) => {
      try {
        setBubbleSetIndex(nextIndex);
        timer = setTimeout(() => {
          try {
            setCurrentBubbles(nextSet);
            cleanup();
            resolve(true);
          } catch (error) {
            console.error('Error setting bubbles:', error);
            cleanup();
            resolve(false);
          }
        }, 500);
      } catch (error) {
        console.error('Error in bubble transition:', error);
        cleanup();
        resolve(false);
      }
    });
  }, []);

  useEffect(() => {
    const handleBubbleTransitions = async (): Promise<void> => {
      try {
        if (currentMessageIndex === 6 && bubbleSetIndex === 0) {
          await handleBubbleTransition(factBubblesSet2, 1);
        } else if (currentMessageIndex === 9 && bubbleSetIndex === 1) {
          await handleBubbleTransition(factBubblesSet3, 2);
        }
      } catch (error) {
        console.error('Error transitioning bubbles:', error);
      }
    };
    void handleBubbleTransitions();
  }, [currentMessageIndex, bubbleSetIndex, handleBubbleTransition]);

  useEffect(() => {
    // Function to simulate typing and add messages one by one
    const addMessage = async (): Promise<void> => {
      if (currentMessageIndex >= initialMessages.length) return;

      const message = initialMessages[currentMessageIndex];
      if (!message) return;

      // Update current part if needed
      if (message.part !== currentPart) {
        setMessages([]);
        setCurrentPart(message.part || 1);
        await new Promise(resolve => setTimeout(resolve, 800)); // Longer delay before starting new part
        return;
      }

      // Add message with typing indicator
      const newMessage: Message = { ...message, typing: true };
      setMessages(prev => [...prev, newMessage]);
      
      // Simulate typing delay based on message length
      const typingDelay = Math.min(message.text.length * 25, 2500); // Slower typing
      await new Promise(resolve => setTimeout(resolve, typingDelay));
      
      // Remove typing indicator
      setMessages(prev => 
        prev.map(msg => 
          msg.id === message.id ? { ...msg, typing: false } : msg
        )
      );

      // Add longer delay between messages
      await new Promise(resolve => setTimeout(resolve, 600));
      setCurrentMessageIndex(prev => prev + 1);
    };

    void addMessage();
  }, [currentMessageIndex, currentPart]);

  // Handle bubble set transitions based on index changes
  useEffect(() => {
    const transitionBubbles = async (): Promise<void> => {
      if (bubbleSetIndex === 1) {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            setCurrentBubbles(factBubblesSet2);
            resolve();
          }, 500);
        });
      } else if (bubbleSetIndex === 2) {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            setCurrentBubbles(factBubblesSet3);
            resolve();
          }, 500);
        });
      }
    };
    void transitionBubbles();
  }, [bubbleSetIndex]);

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-white">


      {/* Floating fact bubbles */}
      {currentBubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute ${bubble.position === 'left' ? 'left-16 -translate-x-1/2' : 'right-16 translate-x-1/2'} 
            ${bubble.position === 'left' ? 'top-1/3' : 'top-2/3'} transform 
            max-w-xs ${bubble.type === 'red' ? 'bg-blue-50/90' : 'bg-blue-50/90'} 
            p-4 rounded-xl shadow-lg backdrop-blur-sm border border-blue-100/50
            ${bubbleSetIndex > 0 && ((currentBubbles === factBubblesSet1 && bubbleSetIndex === 1) || 
              (currentBubbles === factBubblesSet2 && bubbleSetIndex === 2)) ? 
              'animate-fade-out' : 
              `animate-${bubble.position === 'left' ? 'float-slow' : 'float-delayed'}`} 
            z-20`}
        >
          <div 
            className={`absolute ${bubble.position === 'left' ? '-right-2' : '-left-2'} 
              top-1/2 transform ${bubble.position === 'left' ? 'translate-x-full' : '-translate-x-full'} -translate-y-1/2 
              w-2 h-2 ${bubble.type === 'red' ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'} rotate-45`}
          />
          <p className={`text-sm ${bubble.type === 'red' ? 'text-red-700' : 'text-blue-700'}`}>
            <span className="font-semibold block mb-1">{bubble.title}</span>
            {bubble.content}
          </p>
        </div>
      ))}

      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Experience AI-Powered Healthcare
      </h1>

      <div className="w-full relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm">
            <div 
              ref={chatContainerRef}
              className="min-h-[400px] px-8 py-8"
            >
              <div className="flex flex-col space-y-4">
                {getCurrentPartMessages().map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'patient' ? 'justify-end' : 'justify-start'} 
                      opacity-0 animate-fade-in`}
                    style={{ animationDelay: `${message.id * 0.2}s`, animationFillMode: 'forwards' }}
                  >
                    <div
                      className={`px-6 py-3 max-w-md backdrop-blur-sm rounded-2xl ${
                        message.sender === 'patient'
                          ? 'bg-blue-500/90 text-white'
                          : message.sender === 'doctor'
                          ? 'bg-green-500/90 text-white'
                          : 'bg-gray-100 text-gray-800'
                      } transform transition-transform duration-300 hover:scale-[1.02]`}
                    >
                      <div className="flex flex-col">
                        {message.sender !== 'patient' && (
                          <span className={`text-xs mb-1 ${message.sender === 'doctor' ? 'text-green-100' : 'text-gray-500'}`}>
                            {message.sender === 'doctor' ? 'Dr. Smith' : 'AI Assistant'}
                          </span>
                        )}
                        <p className="text-sm">
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
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          onClick={() => {
            setMessages([]);
            setCurrentPart(1);
            setCurrentMessageIndex(0);
            setBubbleSetIndex(0);
          }}
        >
          Restart Demo
        </button>
      </div>
    </div>
  );
}
