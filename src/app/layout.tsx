import './globals.css';  // Import global styles
import Header from "../components/Header";

export const metadata = {
  title: 'Mitul’s CP Journey',
  description: 'A collection of resources, tutorials, and guides for competitive programming.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />  {/* The Header will be displayed on all pages */}
        <main>{children}</main>  {/* Content of each page */}
      </body>
    </html>
  );
}
