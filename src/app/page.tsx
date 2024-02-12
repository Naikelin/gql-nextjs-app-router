
import React from 'react';

const Page: React.FC = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Go to /client-mode */}
      <a
        href="/client-mode"
        className="text-4xl font-bold text-center text-blue-600"
      >
        Go to Client Mode
      </a>

      {/* Go to /server-mode */}
      <a
        href="/server-mode"
        className="text-4xl font-bold text-center text-blue-600"
      >
        Go to Server Mode
      </a>
    </main>
  );
}

export default Page;