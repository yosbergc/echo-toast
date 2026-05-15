import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Echo Toast | React Toast Component',
  description: 'A modern, lightweight toast component designed specifically for React with clean aesthetics and smooth animations.',
}

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Echo Toast</h1>
      <p>
        You can open{' '}
        <Link href="/docs" className="font-medium underline">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </div>
  );
}
