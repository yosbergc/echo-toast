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

      <p className='text-sm mt-8'>Done with 💙 by 
        <Link href="https://github.com/yosbergc" className='underline'> yosbergc</Link>
      </p>

      <p className='text-xs text-gray-400 absolute bottom-20 left-1/2 -translate-1/2'>Documentation created thanks to 
        <Link href="https://www.fumadocs.dev/" className='underline'> Fumadocs</Link>
      </p>
    </div>
  );
}
