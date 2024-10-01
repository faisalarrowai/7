"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { DollarSign } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Map } from 'lucide-react';

export default function LandSalePage_KJFVK() {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-black min-h-screen text-gray-800 dark:text-white">
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Land for Sale</h1>
          <p className="text-lg">Beautiful land in the marsh area available for purchase.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Map className="h-6 w-6 text-green-600" />
                <span>Marshland Property</span>
              </CardTitle>
              <CardDescription>Located in the serene marshlands, perfect for nature lovers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <DollarSign className="h-6 w-6 text-green-600" />
                <span className="text-xl">$120,000</span>
              </div>
              <p className="mt-4">
                This land spans over 5 acres and offers a unique opportunity for development or personal retreat. Contact us for more details.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="mb-2">Inquire Now</CardTitle>
            <CardDescription>Leave your contact details and message below to inquire about this property.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium">Name</label>
                      <Input id="name" type="text" placeholder="Your Name" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter your full name here</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your Email" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter your email address</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium">Message</label>
                      <Input id="message" type="text" placeholder="Your Message" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Leave your message or inquiry here</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Send Inquiry
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}