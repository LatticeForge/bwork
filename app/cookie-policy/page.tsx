import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Cookie Policy for Beyond Work. Learn about how we use cookies and similar technologies on our website.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-4">Cookie Policy</h1>
          <p className="text-lg opacity-90">
            Last Updated: December 17, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            {/* Introduction */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">1. What Are Cookies?</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                This Cookie Policy explains how Beyond Work ("we," "our," or "us") uses cookies and similar technologies on our website{' '}
                <Link href="/" className="text-primary-600 hover:underline">
                  bwork.sa
                </Link>
                {' '}(the "Website").
              </p>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">2. Types of Cookies We Use</h2>
              <p className="text-secondary-700 leading-relaxed mb-6">
                We use different types of cookies for various purposes:
              </p>

              {/* Essential Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary-900 flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                  Essential Cookies (Strictly Necessary)
                </h3>
                <p className="text-secondary-700 leading-relaxed mb-3">
                  These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-secondary-200 rounded-lg overflow-hidden">
                    <thead className="bg-secondary-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Cookie Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Purpose</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-secondary-700 font-mono">cookie_consent</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Stores your cookie preferences</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">1 year</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-secondary-700 font-mono">session_id</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Maintains your session state</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary-900 flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                  Analytics Cookies (Performance)
                </h3>
                <p className="text-secondary-700 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to improve the website's performance and user experience.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-secondary-200 rounded-lg overflow-hidden">
                    <thead className="bg-secondary-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Cookie Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Purpose</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-secondary-700 font-mono">_ga</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Google Analytics - distinguishes unique users</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">2 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-secondary-700 font-mono">_ga_*</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Google Analytics 4 - stores session state</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">2 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-secondary-700 font-mono">_gid</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Google Analytics - distinguishes users</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">24 hours</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-secondary-700 font-mono">_gat</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Google Analytics - throttle request rate</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">1 minute</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary-900 flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-purple-500 rounded-full"></span>
                  Functional Cookies
                </h3>
                <p className="text-secondary-700 leading-relaxed mb-3">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-secondary-200 rounded-lg overflow-hidden">
                    <thead className="bg-secondary-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Cookie Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Purpose</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-secondary-700 font-mono">chatbot_state</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Remembers chatbot conversation state</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Session</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-secondary-700 font-mono">user_preferences</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">Stores your website preferences</td>
                        <td className="px-4 py-3 text-sm text-secondary-700">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Google Analytics Details */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">3. Google Analytics</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We use Google Analytics 4 to analyze how visitors use our website. Google Analytics uses cookies to collect information about:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4 mb-4">
                <li>The number of visitors to our website</li>
                <li>Where visitors have come from and the websites they visited</li>
                <li>Pages visited within our website</li>
                <li>Time spent on each page</li>
                <li>Device and browser information</li>
                <li>User interactions and engagement</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mb-4">
                This information is collected anonymously and is used to create reports that help us improve our website. Google Analytics does not collect personally identifiable information unless you explicitly provide it (e.g., through a form).
              </p>
              <p className="text-secondary-700 leading-relaxed">
                You can opt-out of Google Analytics tracking by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4 mt-4">
                <li>
                  Installing the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
                <li>Adjusting your cookie preferences through our cookie consent banner</li>
                <li>Enabling "Do Not Track" in your browser settings</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mt-4">
                Learn more about Google's privacy practices:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Google Privacy Policy
                </a>
              </p>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">4. How We Use Cookies</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Website Functionality</h4>
                    <p className="text-secondary-700">
                      Essential cookies enable core website features like secure login, form submissions, and maintaining your session.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Performance Analysis</h4>
                    <p className="text-secondary-700">
                      Analytics cookies help us understand which pages are most popular, how visitors navigate the site, and where improvements are needed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">User Experience</h4>
                    <p className="text-secondary-700">
                      Functional cookies remember your preferences to provide a more personalized experience on future visits.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Security</h4>
                    <p className="text-secondary-700">
                      Cookies help us detect and prevent security threats, fraudulent activity, and unauthorized access.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">5. How to Control Cookies</h2>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">5.1 Cookie Consent Banner</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                When you first visit our website, you will see a cookie consent banner where you can choose to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4 mb-6">
                <li><strong>Accept All Cookies:</strong> Allow all cookies including analytics</li>
                <li><strong>Reject Non-Essential Cookies:</strong> Only allow essential cookies</li>
                <li><strong>Customize Preferences:</strong> Choose which types of cookies to allow</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">5.2 Browser Settings</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                You can control and delete cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4 mb-4">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <p className="text-secondary-700 leading-relaxed mb-4">
                Here are links to cookie management instructions for popular browsers:
              </p>
              <ul className="space-y-2 text-secondary-700 ml-4">
                <li>
                  •{' '}
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  •{' '}
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  •{' '}
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  •{' '}
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <p className="text-yellow-800">
                  <strong>Please note:</strong> Disabling cookies may affect the functionality of our website and limit your ability to use certain features.
                </p>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">6. Third-Party Cookies</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Some cookies on our website are placed by third-party services. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance measurement</li>
                <li><strong>Google Fonts:</strong> For loading web fonts (uses minimal cookies)</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mt-4">
                We do not control these third-party cookies. For more information about third-party cookies and how to opt-out, please refer to the third party's privacy policy.
              </p>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">7. Changes to This Cookie Policy</h2>
              <p className="text-secondary-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any significant changes by updating the "Last Updated" date at the top of this policy. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">8. Contact Us</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-secondary-50 rounded-lg p-6 space-y-2">
                <p className="text-secondary-900 font-semibold">Beyond Work</p>
                <p className="text-secondary-700">
                  Email:{' '}
                  <a href="mailto:privacy@bwork.sa" className="text-primary-600 hover:underline">
                    privacy@bwork.sa
                  </a>
                </p>
                <p className="text-secondary-700">
                  Phone:{' '}
                  <a href="tel:+966535083449" className="text-primary-600 hover:underline">
                    +966 53 508 3449
                  </a>
                </p>
                <p className="text-secondary-700">
                  Address: Khalid Bin Waleed Street, Malaz, Riyadh 12836, Saudi Arabia
                </p>
                <p className="text-secondary-700">
                  Website:{' '}
                  <Link href="/" className="text-primary-600 hover:underline">
                    https://bwork.sa
                  </Link>
                </p>
              </div>
            </section>

            {/* Consent */}
            <section className="border-t pt-8">
              <p className="text-secondary-700 leading-relaxed">
                By using our website, you consent to the use of cookies as described in this Cookie Policy.
              </p>
            </section>
          </div>

          {/* Related Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/privacy-policy"
              className="btn-secondary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="btn-secondary"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
