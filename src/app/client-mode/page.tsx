'use client';

import React, { useState } from 'react';
import AnimeListPage from '@/components/getAnimeList';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure page doesn't go below 1
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1> anime list </h1>
        <div className="flex flex-col items-center justify-between">
          <AnimeListPage page={currentPage} />
          <div className="mt-4 flex">
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Previous Page</button>
            <button onClick={goToNextPage} className="px-4 py-2 bg-blue-500 text-white rounded-md">Next Page</button>
          </div>
        </div>
      </div>
    </main>
  );
}
