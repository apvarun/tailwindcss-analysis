import React from 'react';
import useSWR from 'swr';
import Categories from '../components/Categories';
import Header from '../components/Header';
import OverviewStats from '../components/OverviewStats';
import { fetcher } from '../utils/fetcher';

export default function Home() {
  const { data, error } = useSWR('/api/stats', fetcher);


  return (
    <div className="container mx-auto px-6">
      <Header />
      {error && <p>Error Loading data. Try again.</p>}
      {!data && <p>Loading data. Please wait.</p>}
      {!error && data && (
        <>
          <OverviewStats data={data.metrics} />
          <Categories data={data.categories} />
        </>
      )}
    </div>
  );
}
