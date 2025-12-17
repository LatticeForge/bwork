import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Privacy Policy for Beyond Work. Learn how we collect, use, and protect your personal information in compliance with GDPR and Saudi Arabia data protection laws.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-4">Privacy Policy</h1>
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
              <h2 className="heading-md mb-4 text-primary-600">1. Introduction</h2>
              <p className="text-secondary-700 leading-relaxed">
                Beyond Work ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
                <Link href="/" className="text-primary-600 hover:underline">
                  bwork.sa
                </Link>
                , use our services, or interact with us.
              </p>
              <p className="text-secondary-700 leading-relaxed mt-4">
                By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">2.1 Personal Information You Provide</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Fill out our contact form (name, email, subject, message)</li>
                <li>Use our chatbot (messages, inquiry details)</li>
                <li>Request a quote or consultation (name, company, email, phone, project details)</li>
                <li>Communicate with us via email or phone</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-secondary-900">2.2 Automatically Collected Information</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device and usage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information (type, operating system)</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website/source</li>
                <li>Date and time of access</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-secondary-900">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website. For detailed information about our use of cookies, please see our{' '}
                <Link href="/cookie-policy" className="text-primary-600 hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">3. How We Use Your Information</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To process and fulfill service requests</li>
                <li>To send you relevant information about our services</li>
                <li>To improve our website and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To send administrative information (policy updates, service changes)</li>
              </ul>
            </section>

            {/* Google Analytics */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">4. Google Analytics</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We use Google Analytics 4 (GA4) to analyze website traffic and user behavior. Google Analytics collects information such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>How often users visit our website</li>
                <li>What pages they visit and in what sequence</li>
                <li>How long they stay on each page</li>
                <li>What external sites referred them to us</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mt-4">
                Google Analytics uses cookies to collect this information. The information generated by the cookie about your use of the website will be transmitted to and stored by Google. You can opt-out of Google Analytics by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
              <p className="text-secondary-700 leading-relaxed mt-4">
                For more information about Google's privacy practices, please visit the{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Google Privacy Policy
                </a>
                .
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">5. How We Share Your Information</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">5.1 Service Providers</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We may share your information with third-party service providers who perform services on our behalf, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Cloud hosting providers (Vercel, MongoDB Atlas)</li>
                <li>Analytics services (Google Analytics)</li>
                <li>Email service providers</li>
                <li>Customer relationship management (CRM) systems</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-secondary-900">5.2 Legal Requirements</h3>
              <p className="text-secondary-700 leading-relaxed">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government agencies).
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-secondary-900">5.3 Business Transfers</h3>
              <p className="text-secondary-700 leading-relaxed">
                If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">6. Data Security</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure database storage with encryption</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">7. Data Retention</h2>
              <p className="text-secondary-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Contact form submissions and inquiries are retained for up to 2 years for business purposes and customer service. After this period, personal data is securely deleted or anonymized.
              </p>
            </section>

            {/* Your Rights (GDPR & CCPA) */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">8. Your Privacy Rights</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">8.1 European Users (GDPR)</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), you have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restriction:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-secondary-900">8.2 California Users (CCPA)</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                If you are a California resident, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Know what personal information we collect and how we use it</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of your personal information (we do not sell personal data)</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>

              <p className="text-secondary-700 leading-relaxed mt-6">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@bwork.sa" className="text-primary-600 hover:underline">
                  privacy@bwork.sa
                </a>{' '}
                or{' '}
                <a href="tel:+966535083449" className="text-primary-600 hover:underline">
                  +966 53 508 3449
                </a>
                .
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">9. Children's Privacy</h2>
              <p className="text-secondary-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information from our systems.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">10. International Data Transfers</h2>
              <p className="text-secondary-700 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your country or jurisdiction where data protection laws may differ. By using our services, you consent to the transfer of your information to Saudi Arabia and other countries where we operate. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">11. Third-Party Links</h2>
              <p className="text-secondary-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">12. Changes to This Privacy Policy</h2>
              <p className="text-secondary-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Significant changes will be communicated via email or a prominent notice on our website. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">13. Contact Us</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
                By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions.
              </p>
            </section>
          </div>

          {/* Related Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/terms-of-service"
              className="btn-secondary"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="btn-secondary"
            >
              Cookie Policy
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
