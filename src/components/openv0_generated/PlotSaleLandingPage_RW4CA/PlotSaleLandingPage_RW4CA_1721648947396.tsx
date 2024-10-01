"use client";

import { Accordion } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
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
import { Input } from '@/components/ui/input';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Popover } from '@/components/ui/popover';
import { PopoverContent } from '@/components/ui/popover';
import { PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { Mail } from 'lucide-react';
import { Map } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';

export default function PlotSaleLandingPage_RW4CA() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-white dark:bg-black shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">Marshland Plots</div>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://via.placeholder.com/1200x400")' }}>
        <div className="h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Buy Your Dream Plot on Marshland</h1>
          <Button variant="secondary">Learn More</Button>
        </div>
      </section>

      {/* Available Plots Section */}
      <section className="my-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Available Plots</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {[1, 2, 3].map((plot) => (
            <Card key={plot}>
              <CardHeader>
                <CardTitle>Plot #{plot}</CardTitle>
                <CardDescription>Details about plot {plot}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Map className="h-6 w-6 mr-2" />
                  <p>Size: 500 sqm</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">More Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="my-16 py-16 bg-gray-200 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
          <div className="flex flex-col items-center space-y-8">
            {[1, 2, 3].map((testimonial) => (
              <Popover key={testimonial}>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage src={`https://via.placeholder.com/150?text=${testimonial}`} />
                    <AvatarFallback>{testimonial}</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <h3 className="text-xl font-semibold">Customer {testimonial}</h3>
                  <p>I'm very satisfied with my plot purchase. Highly recommended!</p>
                  <ThumbsUp className="h-6 w-6 text-green-500 mt-2" />
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto my-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">FAQs</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1">
            <AccordionTrigger>What is the marshland plot size?</AccordionTrigger>
            <AccordionContent>The plots are 500sqm each, perfect for your dream project.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>Are there any additional costs?</AccordionTrigger>
            <AccordionContent>Aside from the purchase price, there are no hidden costs.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>How can I contact you for more information?</AccordionTrigger>
            <AccordionContent>You can reach out to us using the contact form below or call us at our office.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto my-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>Fill out the form below to send us a message.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="primary">Send Message</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black py-8">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p>© 2023 Marshland Plots. All rights reserved.</p>
          <div className="flex space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Mail className="h-6 w-6" />
                </TooltipTrigger>
                <TooltipContent>info@marshlandplots.com</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <PhoneCall className="h-6 w-6" />
                </TooltipTrigger>
                <TooltipContent>+1 234 567 8910</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </footer>
    </div>
  );
}