'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  hasSetPreferences,
  isConsentExpired,
  acceptAll,
  rejectAll,
  getConsent,
  updateConsent,
  saveConsent,
  type CookiePreferences,
} from '@/lib/cookieConsent';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: Date.now(),
    version: '1.0',
  });

  useEffect(() => {
    // Check if we should show the banner
    const shouldShow = !hasSetPreferences() || isConsentExpired();
    setShowBanner(shouldShow);

    // Load current preferences
    if (hasSetPreferences()) {
      setPreferences(getConsent());
    }
  }, []);

  useEffect(() => {
    if (showCustomize) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showCustomize]);

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
    setShowCustomize(false);
    // Reload page to load GA4 if analytics was just enabled
    window.location.reload();
  };

  const handleRejectAll = () => {
    rejectAll();
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
    setShowBanner(false);
    setShowCustomize(false);
    // Reload page to apply analytics consent changes
    window.location.reload();
  };

  const handleToggle = (category: 'analytics' | 'marketing') => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleClose = () => {
    // If user closes without choosing, default to reject all
    if (!hasSetPreferences()) {
      rejectAll();
    }
    setShowBanner(false);
    setShowCustomize(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop for customize panel */}
      {showCustomize && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] transition-opacity"
          onClick={() => setShowCustomize(false)}
          aria-hidden="true"
        />
      )}

      {/* Cookie Consent Banner */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-secondary-200 shadow-lg"
        role="dialog"
        aria-label="Cookie Consent Banner"
        aria-describedby="cookie-consent-description"
      >
        <div className="container-custom py-4 md:py-6">
          {/* Main Banner Content */}
          {!showCustomize ? (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Message */}
              <div className="flex-1">
                <p id="cookie-consent-description" className="text-secondary-700 text-sm md:text-base">
                  We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized
                  content. By clicking "Accept All", you consent to our use of cookies.{' '}
                  <Link
                    href="/cookie-policy"
                    className="text-primary-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </Link>
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
                <button
                  onClick={handleAcceptAll}
                  className="btn-primary px-4 py-2 text-sm md:text-base flex-1 md:flex-none"
                  aria-label="Accept all cookies"
                >
                  Accept
                </button>
                <button
                  onClick={handleRejectAll}
                  className="btn-secondary px-4 py-2 text-sm md:text-base flex-1 md:flex-none"
                  aria-label="Reject non-essential cookies"
                >
                  Reject
                </button>
                <button
                  onClick={handleCustomize}
                  className="btn-outline px-4 py-2 text-sm md:text-base flex-1 md:flex-none"
                  aria-label="Customize cookie preferences"
                >
                  Customize
                </button>
                <button
                  onClick={handleClose}
                  className="text-secondary-500 hover:text-secondary-700 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close cookie banner"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            /* Customize Panel */
            <div className="bg-white rounded-lg max-w-2xl mx-auto px-4 py-4 sm:p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-secondary-200">
                <h3 className="text-lg sm:text-xl font-semibold text-secondary-900">Customize Cookie Preferences</h3>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="text-secondary-500 hover:text-secondary-700 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0 -mr-2"
                  aria-label="Close customization panel"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {/* Essential Cookies */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between p-3 sm:p-4 bg-secondary-50 rounded-lg gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold text-secondary-900 text-sm sm:text-base">Essential Cookies</h4>
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded whitespace-nowrap">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">
                      Required for the website to function properly. These cookies enable basic functions like page
                      navigation and access to secure areas.
                    </p>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start">
                    <div className="w-12 h-6 bg-primary-600 rounded-full cursor-not-allowed opacity-50">
                      <div className="w-5 h-5 bg-white rounded-full mt-0.5 ml-6 transition-transform shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between p-3 sm:p-4 border border-secondary-200 rounded-lg gap-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary-900 mb-1 text-sm sm:text-base">Analytics Cookies</h4>
                    <p className="text-xs sm:text-sm text-secondary-600 mb-2 leading-relaxed">
                      Help us understand how visitors interact with our website by collecting and reporting information
                      anonymously. Includes Google Analytics.
                    </p>
                    <Link
                      href="/cookie-policy#analytics"
                      className="text-xs text-primary-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View details
                    </Link>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start">
                    <button
                      onClick={() => handleToggle('analytics')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.analytics ? 'bg-primary-600' : 'bg-secondary-300'
                      }`}
                      role="switch"
                      aria-checked={preferences.analytics}
                      aria-label="Toggle analytics cookies"
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform shadow-sm ${
                          preferences.analytics ? 'ml-6' : 'ml-0.5'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between p-3 sm:p-4 border border-secondary-200 rounded-lg gap-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary-900 mb-1 text-sm sm:text-base">Marketing Cookies</h4>
                    <p className="text-xs sm:text-sm text-secondary-600 mb-2 leading-relaxed">
                      Used to track visitors across websites to display relevant advertisements and measure campaign
                      effectiveness. Currently not in use.
                    </p>
                    <Link
                      href="/cookie-policy#marketing"
                      className="text-xs text-primary-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View details
                    </Link>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start">
                    <button
                      onClick={() => handleToggle('marketing')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.marketing ? 'bg-primary-600' : 'bg-secondary-300'
                      }`}
                      role="switch"
                      aria-checked={preferences.marketing}
                      aria-label="Toggle marketing cookies"
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform shadow-sm ${
                          preferences.marketing ? 'ml-6' : 'ml-0.5'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3 pt-4 border-t border-secondary-200">
                <button onClick={() => setShowCustomize(false)} className="btn-secondary px-6 py-2 w-full sm:w-auto">
                  Cancel
                </button>
                <button onClick={handleSaveCustom} className="btn-primary px-6 py-2 w-full sm:w-auto">
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
