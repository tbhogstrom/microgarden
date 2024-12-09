import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Sprout, 
  Layout, 
  LineChart, 
  Settings,
  BookOpen
} from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Calendar, label: 'Calendar' },
    { path: '/plants', icon: Sprout, label: 'Plants' },
    { path: '/layout', icon: Layout, label: 'Garden Layout' },
    { path: '/analytics', icon: LineChart, label: 'Analytics' },
    { path: '/journal', icon: BookOpen, label: 'Garden Journal' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      <NavigationMenu className="max-w-none justify-start">
        <NavigationMenuList className="flex flex-col space-y-2 w-full">
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavigationMenuItem key={path} className="w-full">
              <Link
                to={path}
                className={`flex items-center px-4 py-2 rounded-md hover:bg-accent ${
                  location.pathname === path ? 'bg-accent' : ''
                }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{label}</span>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Separator className="my-4" />
    </>
  );
}