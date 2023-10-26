import React from 'react';
import useSWR from 'swr';
import Categories from '../components/Categories';
import Header from '../components/Header';
import OverviewStats from '../components/OverviewStats';
import { Colors } from '../components/Colors';
import { fetcher } from '../utils/fetcher';

export default function Home() {
  const { data, error } = useSWR('/api/stats', fetcher);

  return (
    <div className="container mx-auto px-4">
      <Header />
      <main className='px-4'>
        {error && (
          <p className="text-[#ff0000]">Error Loading data. Try again.</p>
        )}
        {!data && <p className="text-green-500">Loading data. Please wait.</p>}
        {!error && data && (
          <>
            <OverviewStats data={data.metrics} />
            <Colors data={data.categories} />
            <Categories data={data.categories} />
          </>
        )}
      </main>
    </div>
  );
}
