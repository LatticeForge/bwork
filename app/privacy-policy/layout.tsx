import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Privacy Policy for Beyond Work. Learn how we collect, use, and protect your personal information in compliance with GDPR and Saudi Arabia data protection laws.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
