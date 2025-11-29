"use client";
import Dither from "@/components/Dither";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FreighterConnect } from "@/components/FreighterConnect";
export default function Home() {
  const features = [
    {
      title: "Secure & Verifiable",
      description:
        "Every ticket exists on Ethereum — immutable, transparent, and linked to its rightful owner.",
      image: "/lock.png",
    },
    {
      title: "Transfer or Trade Freely",
      description:
        "Users can transfer or resell tickets directly through their wallets — no hidden commissions.",
      image: "/hands.png",
    },
    {
      title: "Event Manager Dashboard",
      description:
        "Organizers can create events, set prices, define rules, and track ticket sales in real-time.",
      image: "/computer.png",
    },
    {
      title: "Seamless Wallet Integration",
      description:
        "Supports MetaMask, WalletConnect, and more — mint, buy, and check in with one click.",
      image: "/watchtower.png",
    },
  ];

  const events = [
    {
      name: "Ethereum Denver 2024",
      date: "MAR 15",
      location: "Denver, CO",
      price: "0.5 ETH",
      available: "234",
      status: "SELLING FAST",
    },
    {
      name: "Web3 Music Festival",
      date: "APR 22",
      location: "Miami, FL",
      price: "0.3 ETH",
      available: "567",
      status: "ON SALE",
    },
    {
      name: "NFT.NYC Conference",
      date: "MAY 08",
      location: "New York, NY",
      price: "0.8 ETH",
      available: "89",
      status: "ALMOST SOLD",
    },
  ];

  const recentActivity = [
    {
      type: "PURCHASE",
      user: "0x742d...3f8a",
      event: "Ethereum Denver 2024",
      amount: "0.5 ETH",
      time: "2m ago",
    },
    {
      type: "TRANSFER",
      user: "0x9a3f...2c1d",
      event: "Web3 Music Festival",
      amount: "—",
      time: "5m ago",
    },
    {
      type: "PURCHASE",
      user: "0x1e8b...7d4c",
      event: "NFT.NYC Conference",
      amount: "0.8 ETH",
      time: "8m ago",
    },
    {
      type: "MINT",
      user: "0x5f2a...9b6e",
      event: "Crypto Art Expo",
      amount: "0.2 ETH",
      time: "12m ago",
    },
    {
      type: "PURCHASE",
      user: "0x8c4d...1a3f",
      event: "Ethereum Denver 2024",
      amount: "0.5 ETH",
      time: "15m ago",
    },
    {
      type: "TRANSFER",
      user: "0x3b7e...4f2c",
      event: "Web3 Music Festival",
      amount: "—",
      time: "18m ago",
    },
  ];

  return (
    <div className="max-w-5xl  mx-auto  md:px-0">
      <div className="relative w-full border corner-accents">
        <div className=" absolute   h-full opacity-50 z-0 w-full overflow-hidden">
          <Dither
            waveColor={[1, 1, 1]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={1}
            colorNum={2}
            pixelSize={3}
            waveAmplitude={0.3}
            waveFrequency={4}
            waveSpeed={0.02}
          />
        </div>
        <div className="absolute inset-0  z-[20]  w-full [background:radial-gradient(125%_125%_at_0%_0%,transparent_20%,black_100%)]"></div>
        <div className="relative  z-[40] space-y-4 ">
          <div className="p-4 absolute flex justify-between items-center w-full">
            <Link
              href="/"
              className="bg-white flex gap-1 items-center  font-medium tracking-tighter text-black relative rounded-full w-fit px-4 !pr-5 py-2"
            >
              <div className="text-accent">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.28">
                    <path
                      d="M6.6867 2.83747C6.60714 2.35443 6.18956 2 5.7 2C5.21044 2 4.79286 2.35443 4.7133 2.83748C4.6133 3.44455 4.39371 3.8516 4.1155 4.1271C3.83631 4.40358 3.42903 4.61586 2.83748 4.7133C2.35443 4.79286 2 5.21044 2 5.7C2 6.18956 2.35443 6.60714 2.83747 6.6867C3.44455 6.7867 3.8516 7.00629 4.1271 7.2845C4.40358 7.56369 4.61586 7.97097 4.7133 8.56252C4.79286 9.04557 5.21044 9.4 5.7 9.4C6.18956 9.4 6.60714 9.04557 6.6867 8.56253C6.78414 7.97097 6.99642 7.56369 7.2729 7.2845C7.5484 7.00629 7.95545 6.7867 8.56253 6.6867C9.04557 6.60714 9.4 6.18956 9.4 5.7C9.4 5.21044 9.04557 4.79286 8.56252 4.7133C7.95545 4.6133 7.5484 4.39371 7.2729 4.1155C6.99642 3.83631 6.78414 3.42902 6.6867 2.83747Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 17.65C6 17.0977 5.55228 16.65 5 16.65C4.44772 16.65 4 17.0977 4 17.65V18H3.65C3.09772 18 2.65 18.4477 2.65 19C2.65 19.5523 3.09772 20 3.65 20H4V20.35C4 20.9023 4.44772 21.35 5 21.35C5.55228 21.35 6 20.9023 6 20.35V20H6.35C6.90228 20 7.35 19.5523 7.35 19C7.35 18.4477 6.90228 18 6.35 18H6V17.65Z"
                      fill="currentColor"
                    />
                  </g>
                  <path
                    d="M13.8921 2.87392C13.8286 2.3744 13.4036 2 12.9 2C12.3965 2 11.9715 2.3744 11.908 2.87392C11.5859 5.40808 10.9021 7.2346 9.78974 8.51626C8.69232 9.78066 7.07626 10.6306 4.64504 11.0121C4.15855 11.0884 3.80005 11.5076 3.80005 12C3.80005 12.4924 4.15855 12.9116 4.64504 12.9879C7.07626 13.3694 8.69232 14.2193 9.78974 15.4837C10.9021 16.7654 11.5859 18.5919 11.908 21.1261C11.9715 21.6256 12.3965 22 12.9 22C13.4036 22 13.8286 21.6256 13.8921 21.1261C14.2142 18.5919 14.898 16.7654 16.0104 15.4837C17.1078 14.2193 18.7238 13.3694 21.1551 12.9879C21.6415 12.9116 22 12.4924 22 12C22 11.5076 21.6415 11.0884 21.1551 11.0121C18.5917 10.6099 16.9738 9.7062 15.9072 8.42658C14.8209 7.12345 14.2012 5.30628 13.8921 2.87392Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              Sticket
            </Link>
            <FreighterConnect />
          </div>
          <div className="p-8 md:p-20  flex flex-col items-center justify-center gap-4 py-40 lg:p-40">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-tighter">
              Own Your Tickets.
              <br />
              Trade Them Freely.
            </h1>
            <Link href="/discover">
              <div className="!bg-accent/30 backdrop-blur-md h-fit hover:bg-accent/50 transition-colors cursor-pointer corner-accents border border-accent/20 text-accent px-3 py-1 w-fit font-medium">
                Get Started
              </div>
            </Link>
            {/* <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              The first truly transparent ticketing platform. Buy, sell, and
              transfer event tickets as NFTs—no middlemen, no hidden fees.
            </p> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border border-t-0 corner-accents">
        <div className="md:col-span-2 border-b">
          <div className="grid grid-cols-1 md:grid-cols-3 h-full md:divide-x">
            <div className="md:col-span-2 p-6 md:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                POWERED BY ETHEREUM
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                The first truly transparent ticketing platform.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Tickets as NFTs. No middlemen, no hidden fees, full ownership.
                Every transaction is verifiable on-chain.
              </p>
              <Link href="/discover">
                <div className="border corner-accents flex hover:bg-accent/5 cursor-pointer hover:border-accent hover:text-accent transition-colors items-center justify-between px-2 py-2">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </div>
              </Link>
            </div>
            <div className="flex flex-col md:flex-col divide-y md:divide-y">
              <div className="p-4 md:p-6 flex-1 flex flex-col justify-center hover:bg-muted/30 transition-colors">
                <div className="text-3xl font-bold text-accent">0%</div>
                <div className="text-sm text-muted-foreground">
                  Platform Fees
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center hover:bg-muted/30 transition-colors">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Transparent</div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center hover:bg-muted/30 transition-colors">
                <div className="text-3xl font-bold text-accent">∞</div>
                <div className="text-sm text-muted-foreground">Ownership</div>
              </div>
            </div>
          </div>
        </div>
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex group nth-[2]:border-b flex-col justify-end aspect-square border-b md:border-b-0"
          >
            <div
              className="bg-black flex-1 bg-contain bg-center  bg-no-repeat"
              style={{
                backgroundImage: `url(${feature.image})`,
              }}
            ></div>
            <div className="p-4 border-t">
              <h2 className="flex items-center gap-2">
                <div className="w-1 h-4 group-hover:bg-accent transition-colors bg-muted rounded-full"></div>
                {feature.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-t-0 corner-accents">
        <div
          className="p-6 md:p-8 border-b"
          style={{
            backgroundImage: `url(/bg.png)`,
            backgroundSize: "contain",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Explore Live Events
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Discover upcoming events on the blockchain
              </p>
            </div>
            <Link href="/discover">
              <Button variant="outline" className="font-mono gap-2">
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x">
          {events.map((event, index) => {
            return (
              <Link
                key={event.name}
                href={`/discover/${index + 1}`}
                className="p-6 pb-2 hover:bg-muted/30 transition-colors group cursor-pointer border-b md:border-b-0"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="bg-accent/10 text-accent px-2 py-1 text-xs font-bold rounded">
                      {event.status}
                    </div>
                    <div className="text-xs text-muted-foreground border px-2 py-1 rounded">
                      {event.date}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg tracking-tight group-hover:text-accent transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {event.location}
                    </p>
                  </div>
                  <div className="flex items-end justify-between pt-2 border-t">
                    <div>
                      <div className="text-xs text-muted-foreground">Price</div>
                      <div className="font-bold ">{event.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">
                        Available
                      </div>
                      <div className="font-bold">{event.available}</div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="border border-t-0 grid grid-cols-1 md:grid-cols-3 md:divide-x corner-accents">
        <div className="md:col-span-2 p-6 md:p-8 space-y-6 flex flex-col justify-center border-b md:border-b-0">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              Launch Your Event in Minutes
            </h2>
            <p className="text-muted-foreground">
              Create tickets, set prices, define royalties. Watch sales happen
              live on-chain with zero hassle.
            </p>
            <div className="grid grid-cols-3 divide-x border">
              <div className="p-3 md:p-4">
                <div className="text-xl md:text-2xl font-bold text-accent">
                  5 min
                </div>
                <div className="text-xs text-muted-foreground">Setup Time</div>
              </div>
              <div className="p-3 md:p-4">
                <div className="text-xl md:text-2xl font-bold text-accent">
                  0%
                </div>
                <div className="text-xs text-muted-foreground">Hidden Fees</div>
              </div>
              <div className="p-3 md:p-4">
                <div className="text-xl md:text-2xl font-bold text-accent">
                  100%
                </div>
                <div className="text-xs text-muted-foreground">
                  Your Control
                </div>
              </div>
            </div>
            <Link href="/create" className="w-full">
              <div className="border corner-accents flex hover:bg-accent hover:text-white cursor-pointer transition-colors items-center justify-center gap-2 px-4 py-3 bg-accent/5 font-mono">
                Create Your Event
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col max-h-96 md:max-h-none">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold">Activity</h3>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                <span className="text-xs text-muted-foreground">LIVE</span>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
              <div className="divide-y">
                {[...recentActivity, ...recentActivity].map(
                  (activity, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-muted/30 transition-colors border-b"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium truncate">
                            {activity.user}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {activity.event}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-xs font-bold ">
                            {activity.amount}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
