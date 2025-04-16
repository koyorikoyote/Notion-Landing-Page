import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workspace - All-in-one platform for your ideas',
  description: 'A minimalist platform to organize your thoughts, projects, and documents in one beautiful space.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}