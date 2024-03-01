'use client';

import React, { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormDisabled) return; // Prevent form submission if already disabled

    try {
      const response = await fetch(
        'https://core.kindgestures.eu/items/members',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        },
      );

      if (response.ok) {
        setPopupMessage('Thank you for subscribing!');
        setIsFormDisabled(true); // Disable form after successful submission
      } else {
        setPopupMessage('Failed to subscribe. Please try again later.');
      }
    } catch (error) {
      setPopupMessage(
        'An error occurred. Please check your connection and try again.',
      );
    }

    setShowPopup(true); // Show popup with either success or error message
    setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex w-full gap-x-3 ${isFormDisabled ? 'opacity-50' : ''}`}
      >
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={isFormDisabled}
          value={email}
          className="ring-current/10 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={isFormDisabled}
          className="shrink-0 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none disabled:bg-indigo-400"
        >
          Follow our news
        </button>
      </form>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed left-1/2 top-20 -translate-x-1/2 rounded-md border border-gray-300 bg-white p-4 shadow-lg">
          <p>{popupMessage}</p>
        </div>
      )}
    </>
  );
}
