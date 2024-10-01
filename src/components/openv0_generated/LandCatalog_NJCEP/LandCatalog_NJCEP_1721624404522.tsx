"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { DialogDescription } from '@/components/ui/dialog';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';
import { SelectItem } from '@/components/ui/select';
import { SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';
import { FilterX } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { PhoneCall } from 'lucide-react';

const LandCatalog_NJCEP = () => {
  return (
    <div className="p-6 dark:bg-black">
      {/* Search and Filter Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search Listings</CardTitle>
          <CardDescription>Filter and sort the land listings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Search by location" />
          <div className="flex space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="size_asc">Size: Small to Large</SelectItem>
                <SelectItem value="size_desc">Size: Large to Small</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button><FilterX className="mr-2 h-4 w-4" /> Reset Filters</Button>
        </CardFooter>
      </Card>

      {/* Listing Section */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>
              <MapPin className="mr-2 h-4 w-4" /> Green Valley
            </CardTitle>
            <CardDescription>$200,000 - 10 acres</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Beautiful plot of land with scenic views and ample space.</p>
          </CardContent>
          <CardFooter className="flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View Details</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Green Valley</DialogTitle>
                  <DialogDescription>10 acres - $200,000</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>Detailed information about this land listing...</p>
                </div>
              </DialogContent>
            </Dialog>
            <Button>
              <PhoneCall className="mr-2 h-4 w-4" />
              Contact Seller
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <MapPin className="mr-2 h-4 w-4" /> Sunset Hills
            </CardTitle>
            <CardDescription>$150,000 - 5 acres</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Prime location with sunset views, perfect for a new home.</p>
          </CardContent>
          <CardFooter className="flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View Details</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sunset Hills</DialogTitle>
                  <DialogDescription>5 acres - $150,000</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>Detailed information about this land listing...</p>
                </div>
              </DialogContent>
            </Dialog>
            <Button>
              <PhoneCall className="mr-2 h-4 w-4" />
              Contact Seller
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LandCatalog_NJCEP;