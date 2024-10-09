// pages/index.js
import Head from 'next/head';
import BarGraph from './components/BarGraph';
import LiteracyRate from './components/literacyRates';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Literacy Rates</title>
      </Head>
      <BarGraph />
      <LiteracyRate />
      
    </div>
  );
}
