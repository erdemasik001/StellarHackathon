"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function DiscoverPage() {
  const categories = [
    { name: "All Events", count: "234" },
    { name: "Music", count: "89" },
    { name: "Sports", count: "45" },
    { name: "Conference", count: "67" },
    { name: "Art", count: "33" },
  ];

  const events = [
    {
      name: "Ethereum Denver 2024",
      date: "MAR 15, 2024",
      location: "Denver, CO",
      price: "0.5 ETH",
      available: "234",
      total: "500",
      status: "SELLING FAST",
      image: "/lock.png",
      category: "Conference",
    },
    {
      name: "Web3 Music Festival",
      date: "APR 22, 2024",
      location: "Miami, FL",
      price: "0.3 ETH",
      available: "567",
      total: "1000",
      status: "ON SALE",
      image: "/hands.png",
      category: "Music",
    },
    {
      name: "NFT.NYC Conference",
      date: "MAY 08, 2024",
      location: "New York, NY",
      price: "0.8 ETH",
      available: "89",
      total: "300",
      status: "ALMOST SOLD",
      image: "/computer.png",
      category: "Conference",
    },
    {
      name: "Crypto Art Expo",
      date: "JUN 12, 2024",
      location: "Los Angeles, CA",
      price: "0.2 ETH",
      available: "445",
      total: "500",
      status: "ON SALE",
      image: "/watchtower.png",
      category: "Art",
    },
    {
      name: "DeFi Summit 2024",
      date: "JUL 18, 2024",
      location: "Austin, TX",
      price: "1.2 ETH",
      available: "123",
      total: "200",
      status: "SELLING FAST",
      image: "/lock.png",
      category: "Conference",
    },
    {
      name: "Blockchain Sports League",
      date: "AUG 25, 2024",
      location: "Chicago, IL",
      price: "0.6 ETH",
      available: "234",
      total: "800",
      status: "ON SALE",
      image: "/hands.png",
      category: "Sports",
    },
  ];

  return (
    <div className=" min-h-screen">
      <Header />

      <div className="max-w-5xl mx-auto md:px-0">
        {/* Hero Section */}
        <div className="border border-t-0 corner-accents">
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x">
            <div className="md:col-span-2 p-8 md:p-12 space-y-6 border-b md:border-b-0">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                LIVE ON CHAIN
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Discover Events
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Browse upcoming events, buy tickets as NFTs, and join the future
                of transparent ticketing.
              </p>

              {/* Search Bar */}
              <div className="flex gap-2">
                <div className="flex-1 border corner-accents flex items-center gap-2 px-3 py-2 hover:border-accent transition-colors">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
            {/* Stats */}
            <div className="flex flex-col divide-y">
              <div className="p-6 flex-1 flex flex-col justify-center hover:bg-muted/30 transition-colors">
                <div className="text-3xl font-bold text-accent">234</div>
                <div className="text-xs text-muted-foreground">Live Events</div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center hover:bg-muted/30 transition-colors">
                <div className="text-3xl font-bold text-accent">12K+</div>
                <div className="text-xs text-muted-foreground">
                  Tickets Sold
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center hover:bg-muted/30 transition-colors">
                <div className="text-3xl font-bold text-accent">45 ETH</div>
                <div className="text-xs text-muted-foreground">Volume</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="border border-t-0 corner-accents">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`p-4 hover:bg-muted/30 transition-colors cursor-pointer group ${
                  index === 0 ? "bg-accent/5" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium group-hover:text-accent transition-colors">
                    {category.name}
                  </span>
                  <span className="text-xs text-muted-foreground border px-2 py-0.5 rounded">
                    {category.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="border border-t-0 corner-accents grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y">
          {events.map((event, index) => (
            <Link
              key={event.name}
              href={`/discover/${index + 1}`}
              className="p-6 hover:bg-muted/30 transition-colors group cursor-pointer flex flex-col"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                {/* Event Image */}
                <div className="aspect-square border corner-accents overflow-hidden bg-black">
                  <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${event.image})`,
                    }}
                  ></div>
                </div>

                {/* Event Info */}
                <div className="space-y-3 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div className="bg-accent/10 text-accent px-2 py-1 text-xs font-bold rounded">
                      {event.status}
                    </div>
                    <div className="text-xs text-muted-foreground border px-2 py-1 rounded">
                      {event.category}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg tracking-tight group-hover:text-accent transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {event.date}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {event.location}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 divide-x border corner-accents mt-auto">
                    <div className="p-3">
                      <div className="text-xs text-muted-foreground">Price</div>
                      <div className="font-bold text-accent">{event.price}</div>
                    </div>
                    <div className="p-3">
                      <div className="text-xs text-muted-foreground">
                        Available
                      </div>
                      <div className="font-bold">
                        {event.available}/{event.total}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buy Button */}
                <div className="border corner-accents flex hover:bg-accent/5 cursor-pointer hover:border-accent hover:text-accent transition-colors items-center justify-between px-3 py-2">
                  <span className="text-sm font-medium">Buy Ticket</span>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="border border-t-0 corner-accents p-8 text-center">
          <Button variant="outline" className="font-mono">
            Load More Events
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
