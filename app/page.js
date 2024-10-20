import Population from './pages/population';
import LiteracyRate from './pages/literacy';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-2">
    
      <Population />
      <LiteracyRate />
      
    </div>
  );
}
