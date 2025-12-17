/**
 * Cookie Consent Helper Library
 * Manages user cookie preferences for GDPR/CCPA compliance
 */

export type CookieCategory = 'essential' | 'analytics' | 'marketing';

export interface CookiePreferences {
  essential: boolean; // Always true, can't be disabled
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: string; // Policy version user consented to
}

const CONSENT_KEY = 'bwork_cookie_consent';
const CONSENT_VERSION = '1.0'; // Update this when privacy policy changes

/**
 * Get default cookie preferences (only essential enabled)
 */
export const getDefaultPreferences = (): CookiePreferences => ({
  essential: true,
  analytics: false,
  marketing: false,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
});

/**
 * Save cookie preferences to localStorage
 */
export const saveConsent = (preferences: Partial<CookiePreferences>): void => {
  if (typeof window === 'undefined') return;

  const currentPreferences = getConsent();
  const newPreferences: CookiePreferences = {
    ...currentPreferences,
    ...preferences,
    essential: true, // Essential always enabled
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newPreferences));
    // Dispatch custom event for other components to react
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: newPreferences }));
  } catch (error) {
    console.error('Failed to save cookie consent:', error);
  }
};

/**
 * Get current cookie preferences from localStorage
 */
export const getConsent = (): CookiePreferences => {
  if (typeof window === 'undefined') return getDefaultPreferences();

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return getDefaultPreferences();

    const preferences: CookiePreferences = JSON.parse(stored);

    // If policy version changed, reset to defaults
    if (preferences.version !== CONSENT_VERSION) {
      return getDefaultPreferences();
    }

    // Ensure essential is always true
    return {
      ...preferences,
      essential: true,
    };
  } catch (error) {
    console.error('Failed to read cookie consent:', error);
    return getDefaultPreferences();
  }
};

/**
 * Check if user has given consent for a specific category
 */
export const hasConsent = (category: CookieCategory): boolean => {
  const preferences = getConsent();
  return preferences[category] === true;
};

/**
 * Check if user has previously set any cookie preferences
 */
export const hasSetPreferences = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(CONSENT_KEY) !== null;
};

/**
 * Accept all cookies (analytics and marketing)
 */
export const acceptAll = (): void => {
  saveConsent({
    essential: true,
    analytics: true,
    marketing: true,
  });
};

/**
 * Reject all non-essential cookies
 */
export const rejectAll = (): void => {
  saveConsent({
    essential: true,
    analytics: false,
    marketing: false,
  });
};

/**
 * Reset cookie preferences (show banner again)
 */
export const resetConsent = (): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(CONSENT_KEY);
    window.dispatchEvent(new CustomEvent('cookieConsentReset'));
  } catch (error) {
    console.error('Failed to reset cookie consent:', error);
  }
};

/**
 * Update consent for a specific category
 */
export const updateConsent = (category: CookieCategory, value: boolean): void => {
  const currentPreferences = getConsent();
  saveConsent({
    ...currentPreferences,
    [category]: category === 'essential' ? true : value,
  });
};

/**
 * Check if consent is expired (older than 12 months)
 */
export const isConsentExpired = (): boolean => {
  const preferences = getConsent();
  const twelveMonthsAgo = Date.now() - 365 * 24 * 60 * 60 * 1000;
  return preferences.timestamp < twelveMonthsAgo;
};

/**
 * Load Google Analytics based on consent
 */
export const shouldLoadGA4 = (): boolean => {
  return hasConsent('analytics');
};
