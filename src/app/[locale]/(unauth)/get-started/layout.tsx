export const metadata = {
  title: 'Get Started with Kind Health | Healthcare AI Solutions',
  description: 'Join our network of healthcare providers using AI to enhance patient care, streamline operations, and improve outcomes. Sign up today to transform your practice.',
  keywords: 'healthcare AI, medical AI, doctor AI assistant, hospital technology, patient care AI, healthcare automation',
  openGraph: {
    title: 'Get Started with Kind Health | Healthcare AI Solutions',
    description: 'Join our network of healthcare providers using AI to enhance patient care, streamline operations, and improve outcomes.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kind Health AI for Healthcare Providers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started with Kind Health | Healthcare AI Solutions',
    description: 'Join our network of healthcare providers using AI to enhance patient care, streamline operations, and improve outcomes.',
    images: ['/images/og-image.jpg'],
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
