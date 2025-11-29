"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, Users, Share2, Heart } from "lucide-react";

export default function EventDetailPage() {
  const event = {
    name: "Ethereum Denver 2024",
    date: "MAR 15, 2024",
    time: "10:00 AM - 6:00 PM MST",
    location: "Colorado Convention Center, Denver, CO",
    price: "0.5 ETH",
    available: "234",
    total: "500",
    status: "SELLING FAST",
    image: "/lock.png",
    category: "Conference",
    description:
      "Join the largest Ethereum community gathering in North America. Experience three days of workshops, keynotes, and networking with the brightest minds in blockchain technology. This year's conference features exclusive panels on DeFi, NFTs, DAOs, and the future of Web3.",
    organizer: {
      name: "ETH Denver Team",
      verified: true,
      address: "0x8c4d...1a3f",
    },
    perks: [
      "Access to all keynote sessions",
      "Exclusive networking events",
      "Workshop materials & swag bag",
      "After-party access",
    ],
  };

  const similarEvents = [
    {
      name: "Web3 Music Festival",
      date: "APR 22, 2024",
      price: "0.3 ETH",
      image: "/hands.png",
    },
    {
      name: "NFT.NYC Conference",
      date: "MAY 08, 2024",
      price: "0.8 ETH",
      image: "/computer.png",
    },
    {
      name: "Crypto Art Expo",
      date: "JUN 12, 2024",
      price: "0.2 ETH",
      image: "/watchtower.png",
    },
  ];

  return (
    <div className=" min-h-screen">
      <Header />

      <div className="max-w-5xl mx-auto md:px-0">
        {/* Event Header */}
        <div className="border border-t-0 corner-accents">
          <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x">
            <div className="md:col-span-3 p-8 md:p-12 space-y-4 border-b md:border-b-0">
              <div className="flex items-center gap-2">
                <div className="bg-accent/10 text-accent px-2 py-1 text-xs font-bold rounded">
                  {event.status}
                </div>
                <div className="text-xs text-muted-foreground border px-2 py-1 rounded">
                  {event.category}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                {event.name}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="border corner-accents p-2 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    Date
                  </div>
                  <div className="text-sm font-medium mt-1">{event.date}</div>
                </div>
                <div className="border corner-accents p-3 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    Time
                  </div>
                  <div className="text-sm font-medium mt-1">{event.time}</div>
                </div>
                <div className="border corner-accents p-3 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    Location
                  </div>
                  <div className="text-sm truncate font-medium mt-1">
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col divide-y">
              <div className="p-6 flex-1 flex flex-col justify-center items-center hover:bg-muted/30 transition-colors cursor-pointer">
                <Share2 className="w-6 h-6 text-accent mb-2" />
                <span className="text-xs">Share</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center items-center hover:bg-muted/30 transition-colors cursor-pointer">
                <Heart className="w-6 h-6 text-accent mb-2" />
                <span className="text-xs">Save</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="border border-t-0 corner-accents grid grid-cols-1 md:grid-cols-3 md:divide-x">
          {/* Left Column - Event Details */}
          <div className="md:col-span-2 p-6 md:p-8 space-y-6 border-b md:border-b-0">
            {/* Event Image */}
            <div className="aspect-video border corner-accents overflow-hidden bg-black">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${event.image})`,
                }}
              ></div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">ABOUT THIS EVENT</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Perks */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">WHAT&apos;S INCLUDED</h2>
              <div className="border corner-accents grid grid-cols-1 md:grid-cols-2 divide-x divide-y">
                {event.perks.map((perk, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm p-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizer */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">ORGANIZED BY</h2>
              <div className="border corner-accents grid grid-cols-1 md:grid-cols-3 md:divide-x">
                <div className="md:col-span-2 p-4 flex items-center gap-3 border-b md:border-b-0">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {event.organizer.name}
                      </span>
                      {event.organizer.verified && (
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {event.organizer.address}
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-center hover:bg-muted/30 transition-colors cursor-pointer">
                  <span className="text-sm font-medium">View Profile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase */}
          <div className="md:col-span-1 flex flex-col divide-y">
            {/* Price */}
            <div className="p-6 hover:bg-muted/30 transition-colors">
              <div className="text-xs text-muted-foreground">TICKET PRICE</div>
              <div className="text-3xl font-bold text-accent mt-1">
                {event.price}
              </div>
            </div>

            {/* Availability */}
            <div className="grid grid-cols-2 divide-x">
              <div className="p-4 hover:bg-muted/30 transition-colors">
                <div className="text-xs text-muted-foreground">Available</div>
                <div className="text-2xl font-bold mt-1">{event.available}</div>
              </div>
              <div className="p-4 hover:bg-muted/30 transition-colors">
                <div className="text-xs text-muted-foreground">Total</div>
                <div className="text-2xl font-bold mt-1">{event.total}</div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Quantity</span>
                <div className="flex items-center border corner-accents">
                  <button className="px-3 py-1 hover:bg-muted/30 transition-colors">
                    -
                  </button>
                  <span className="px-4 border-x">1</span>
                  <button className="px-3 py-1 hover:bg-muted/30 transition-colors">
                    +
                  </button>
                </div>
              </div>

              <div className="border corner-accents flex hover:bg-accent hover:text-white cursor-pointer transition-colors items-center justify-center gap-2 px-4 py-3 bg-accent/5">
                <span className="text-sm font-medium">Buy Ticket</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Ticket Features */}
            <div className="p-6 flex-1">
              <div className="text-xs font-bold mb-3">TICKET FEATURES</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-accent"></div>
                  Transferable NFT
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-accent"></div>
                  On-chain verification
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-accent"></div>
                  Resell anytime
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-accent"></div>
                  Lifetime access
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Events */}
        <div className="border border-t-0 corner-accents">
          <div className="p-6 md:p-8 border-b">
            <h2 className="text-2xl font-bold tracking-tight">
              SIMILAR EVENTS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y md:divide-y-0">
            {similarEvents.map((similar) => (
              <div
                key={similar.name}
                className="p-6 hover:bg-muted/30 transition-colors group cursor-pointer flex flex-col"
              >
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="aspect-square border corner-accents overflow-hidden bg-black">
                    <div
                      className="w-full h-full bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${similar.image})`,
                      }}
                    ></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold tracking-tight group-hover:text-accent transition-colors">
                      {similar.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {similar.date}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 divide-x border corner-accents mt-auto">
                    <div className="p-2">
                      <div className="text-xs text-muted-foreground">Price</div>
                      <div className="font-bold text-accent text-sm">
                        {similar.price}
                      </div>
                    </div>
                    <div className="p-2 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
