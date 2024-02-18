
import React from 'react';
import LinkRenderingMode from '@/components/linkRenderingMode';

const Page: React.FC = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Go to /client-mode */}
      <LinkRenderingMode text="Client Mode" route="/client-mode" />
      {/* Go to /server-mode */}
      <LinkRenderingMode text="Server Mode" route="/server-mode" />
    </div>
  );
}

export default Page;