'use client';

import { useEffect } from 'react';
import Header from './Header';

export default function HeaderWrapper() {
  // Add padding to body to account for fixed header
  useEffect(() => {
    document.body.style.paddingTop = '4rem';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return <Header />;
}
