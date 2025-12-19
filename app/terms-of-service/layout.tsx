import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Terms of Service for Beyond Work. Review our terms and conditions for using our IT integration and technology solutions services in Saudi Arabia.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
