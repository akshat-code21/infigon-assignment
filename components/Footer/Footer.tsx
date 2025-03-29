import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-400 mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-2">
          <Link href="/privacy-policy" className="hover:text-gray-300 underline transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-gray-300 underline transition-colors">
            Terms & Conditions
          </Link>
          <span>•</span>
          <Link href="/support" className="hover:text-gray-300 underline transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
} 