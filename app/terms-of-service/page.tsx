import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Terms of Service for Beyond Work. Review our terms and conditions for using our IT integration and technology solutions services in Saudi Arabia.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-4">Terms of Service</h1>
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
              <h2 className="heading-md mb-4 text-primary-600">1. Agreement to Terms</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the Beyond Work website located at{' '}
                <Link href="/" className="text-primary-600 hover:underline">
                  bwork.sa
                </Link>{' '}
                (the "Website") and any services provided by Beyond Work ("we," "our," or "us").
              </p>
              <p className="text-secondary-700 leading-relaxed mb-4">
                By accessing or using our Website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website or services.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Website after changes are posted constitutes your acceptance of the modified Terms.
              </p>
            </section>

            {/* Use of Services */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">2. Use of Our Services</h2>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">2.1 Eligibility</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                You must be at least 18 years old to use our services. By using our Website, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">2.2 Permitted Use</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                You may use our Website and services for lawful business purposes only. You agree not to use our services to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our Website or servers</li>
                <li>Collect or harvest user information without consent</li>
                <li>Use automated systems (bots, scrapers) without permission</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-secondary-900">2.3 Account Responsibilities</h3>
              <p className="text-secondary-700 leading-relaxed">
                If you create an account with us, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">3. Services Description</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Beyond Work provides IT integration and technology solutions services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Cloud Infrastructure Solutions</li>
                <li>Network Integration and Management</li>
                <li>Cybersecurity Services</li>
                <li>Software Development and API Integration</li>
                <li>IT Consulting and Support</li>
                <li>Data Center Solutions</li>
                <li>Managed IT Services</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mt-4">
                Service offerings are subject to change. Specific terms for each service will be outlined in separate service agreements or statements of work.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">4. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">4.1 Our Content</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                All content on this Website, including but not limited to text, graphics, logos, images, software, and design, is the property of Beyond Work or its licensors and is protected by Saudi Arabian and international copyright, trademark, and intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">4.2 Limited License</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use our Website for personal or business evaluation purposes. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Reproduce, duplicate, or copy any content without written permission</li>
                <li>Modify, create derivative works, or reverse engineer our Website</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                <li>Use our content for commercial purposes without authorization</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-secondary-900">4.3 Trademarks</h3>
              <p className="text-secondary-700 leading-relaxed">
                "Beyond Work" and our logo are trademarks of Beyond Work. All other trademarks, service marks, and trade names referenced on this Website are the property of their respective owners.
              </p>
            </section>

            {/* User Submissions */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">5. User Submissions</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                When you submit information through our contact forms, chatbot, or other communication channels, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and process such information for the purpose of providing our services and improving our offerings.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                You represent and warrant that any information you submit is accurate, does not violate any third-party rights, and does not contain any malicious code or harmful content.
              </p>
            </section>

            {/* Service Agreements */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">6. Service Agreements and Payments</h2>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">6.1 Quotations and Proposals</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Any quotations or proposals provided by us are valid for 30 days unless otherwise specified. Prices are subject to change without notice until a formal service agreement is executed.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">6.2 Service Contracts</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Specific services will be governed by separate written agreements or statements of work that detail the scope, timeline, deliverables, and payment terms. These service agreements will supplement and incorporate these Terms of Service.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">6.3 Payment Terms</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Payment terms will be specified in individual service agreements. Unless otherwise agreed:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Invoices are payable within 30 days of receipt</li>
                <li>Late payments may incur interest charges</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All fees are quoted in Saudi Riyals (SAR) unless otherwise stated</li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">7. Disclaimers</h2>

              <h3 className="text-xl font-semibold mb-3 text-secondary-900">7.1 Website "As Is"</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Our Website and information provided are on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the Website's operation, content, or information. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Accuracy, reliability, or completeness of content</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Security or freedom from viruses or harmful components</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-secondary-900">7.2 Professional Advice</h3>
              <p className="text-secondary-700 leading-relaxed">
                Information on our Website is for general informational purposes only and should not be considered professional IT advice. For specific IT solutions and recommendations, please contact us for a formal consultation.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">8. Limitation of Liability</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                To the maximum extent permitted by Saudi Arabian law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Beyond Work shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability for any claims arising from the use of our Website shall not exceed SAR 1,000</li>
                <li>We are not responsible for any damages arising from your inability to access or use the Website</li>
                <li>We are not liable for any third-party content, products, or services</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mt-4">
                This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">9. Indemnification</h2>
              <p className="text-secondary-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Beyond Work, its officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from: (a) your use of our Website or services; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit through our Website.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">10. Third-Party Links and Services</h2>
              <p className="text-secondary-700 leading-relaxed">
                Our Website may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of these third-party sites. Your interactions with third-party sites are solely between you and the third party. We recommend reviewing their terms and privacy policies.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">11. Termination</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to our Website and services at our sole discretion, without notice, for any reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 ml-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Extended periods of inactivity</li>
                <li>Request by law enforcement or government agencies</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mt-4">
                Upon termination, your right to use the Website will immediately cease. Provisions that by their nature should survive termination shall survive, including but not limited to intellectual property rights, disclaimers, and limitations of liability.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">12. Governing Law and Jurisdiction</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Any disputes arising from or relating to these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Riyadh, Saudi Arabia. You irrevocably consent to the jurisdiction and venue of such courts.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">13. Dispute Resolution</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                In the event of any dispute, claim, or controversy arising from these Terms:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-secondary-700 ml-4">
                <li>The parties shall first attempt to resolve the dispute through good-faith negotiations</li>
                <li>If negotiations fail within 30 days, the parties may pursue mediation</li>
                <li>If mediation is unsuccessful, the dispute shall be resolved through the courts of Riyadh, Saudi Arabia</li>
              </ol>
            </section>

            {/* Severability */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">14. Severability</h2>
              <p className="text-secondary-700 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">15. Entire Agreement</h2>
              <p className="text-secondary-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and Beyond Work regarding the use of our Website and services, superseding any prior agreements or understandings.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="heading-md mb-4 text-primary-600">16. Contact Information</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                If you have any questions or concerns about these Terms of Service, please contact us:
              </p>
              <div className="bg-secondary-50 rounded-lg p-6 space-y-2">
                <p className="text-secondary-900 font-semibold">Beyond Work</p>
                <p className="text-secondary-700">
                  Email:{' '}
                  <a href="mailto:legal@bwork.sa" className="text-primary-600 hover:underline">
                    legal@bwork.sa
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

            {/* Acknowledgment */}
            <section className="border-t pt-8">
              <p className="text-secondary-700 leading-relaxed">
                By using our Website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
