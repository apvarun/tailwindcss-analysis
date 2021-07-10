import React from 'react';
import useSWR from 'swr';
import Header from '../components/Header';
import OverviewStats from '../components/OverviewStats';
import { fetcher } from '../utils/fetcher';

export default function Home() {
  const { data, error } = useSWR('/api/stats', fetcher);

  const hasError = error || !data;

  return (
    <div className="container mx-auto px-6">
      <Header />
      {hasError && <p>Error Loading data. Try again.</p>}
      {!hasError && (
        <>
          <OverviewStats data={data.stats} />
        </>
      )}
    </div>
  );
}
