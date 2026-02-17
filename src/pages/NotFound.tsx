import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-24 h-24 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-12 h-12 text-[#FFD700]" />
        </div>
        
        <h1 className="text-6xl font-bold text-[#001F3F] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold"
        >
          <Link to="/">
            <Home className="w-5 h-5 mr-2" />
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
