"use client";

import { Alert } from '@/components/ui/alert';
import { AlertDescription } from '@/components/ui/alert';
import { AlertTitle } from '@/components/ui/alert';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { NavigationMenuContent } from '@/components/ui/navigation-menu';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { ExternalLink } from 'lucide-react';
import { Megaphone } from 'lucide-react';

const HomePageWithBanner_QDITO = () => {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen p-6 flex flex-col items-center">
      <header className="w-full mb-10">
        <Alert>
          <Megaphone className="h-6 w-6 mr-2" />
          <div>
            <AlertTitle>Welcome to Our Website!</AlertTitle>
            <AlertDescription>
              Check out the latest updates and features we have added.
            </AlertDescription>
          </div>
        </Alert>
      </header>
      
      <main className="w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Main Banner</CardTitle>
            <CardDescription>Catch the latest updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-lg">
                This is the main content area for the banner. 
                Highlight important information here to catch user's attention.
              </p>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>UA</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>
              Learn More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        <div className="mt-10 w-full">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu Item 1</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link 1</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu Item 2</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link 2</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu Item 3</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link 3</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </main>
    </div>
  );
};

export default HomePageWithBanner_QDITO;