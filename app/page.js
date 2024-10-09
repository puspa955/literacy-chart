// pages/index.js
import Head from 'next/head';
import BarChart from './components/literacyRates';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Literacy Rates</title>
      </Head>
      <BarChart />
    </div>
  );
}
