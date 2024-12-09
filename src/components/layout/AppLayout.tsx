import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sprout as SproutIcon } from 'lucide-react';

export function AppLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card p-4">
        <div className="flex items-center mb-6">
          <SproutIcon className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-bold">Microfarm</h1>
        </div>
        <Navigation />
      </div>

      {/* Main Content */}
      <ScrollArea className="flex-1">
        <main className="p-8">
          <Outlet />
        </main>
      </ScrollArea>
    </div>
  );
}