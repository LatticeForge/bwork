import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Beyond Work - IT Solutions Saudi Arabia',
  description: 'Cookie Policy for Beyond Work. Learn about how we use cookies and similar technologies on our website.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
