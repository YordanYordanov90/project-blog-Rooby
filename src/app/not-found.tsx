import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>The page is not active.</p>
      <Link
        href="/"
        className="mt-4 rounded-md mb-4 bg-black px-4 py-2 text-sm border border-black text-white transition-colors hover:bg-white hover:text-black"
      >
        Go Back
      </Link>
    </main>
  );
}