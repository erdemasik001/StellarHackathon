"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, Send, Download, QrCode } from "lucide-react";
import Link from "next/link";
import { useFreighter } from "@/providers/FreighterProvider";
import { FreighterConnect } from "@/components/FreighterConnect";

export default function MyTicketsPage() {
  const { isConnected, publicKey, network, networkPassphrase } = useFreighter();
  
  const tickets = [
    {
      id: "1",
      eventName: "Ethereum Denver 2024",
      date: "MAR 15, 2024",
      time: "10:00 AM MST",
      location: "Colorado Convention Center",
      image: "/lock.png",
      tokenId: "#1234",
      status: "ACTIVE",
      price: "0.5 ETH",
      category: "Conference",
    },
    {
      id: "2",
      eventName: "Web3 Music Festival",
      date: "APR 22, 2024",
      time: "6:00 PM EST",
      location: "Brooklyn Steel, NY",
      image: "/hands.png",
      tokenId: "#5678",
      status: "ACTIVE",
      price: "0.3 ETH",
      category: "Music",
    },
    {
      id: "3",
      eventName: "NFT.NYC Conference",
      date: "MAY 08, 2024",
      time: "9:00 AM EST",
      location: "Javits Center, NYC",
      image: "/computer.png",
      tokenId: "#9012",
      status: "ACTIVE",
      price: "0.8 ETH",
      category: "Conference",
    },
    {
      id: "4",
      eventName: "Crypto Summit 2024",
      date: "FEB 10, 2024",
      time: "11:00 AM PST",
      location: "San Francisco, CA",
      image: "/watchtower.png",
      tokenId: "#3456",
      status: "USED",
      price: "0.6 ETH",
      category: "Conference",
    },
  ];

  const stats = [
    { label: "Total Tickets", value: "4" },
    { label: "Active", value: "3" },
    { label: "Total Value", value: "2.2 ETH" },
  ];

  const activeTickets = tickets.filter((t) => t.status === "ACTIVE");
  const pastTickets = tickets.filter((t) => t.status === "USED");

  return (
    <div className="min-h-screen">
      <Header />

      <div className="max-w-5xl mx-auto md:px-0">
        {/* Header Section */}
        <div className="border border-t-0 corner-accents">
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x">
            <div className="md:col-span-2 p-8 md:p-12 space-y-4 border-b md:border-b-0">
              <div className="inline-block border corner-accents bg-accent/5 text-accent px-3 py-1 text-xs font-bold">
                [YOUR_WALLET]
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                My Tickets
              </h1>
              <p className="text-muted-foreground text-sm">
                &gt; NFT_COLLECTION // READY_TO_USE_OR_TRADE
              </p>
            </div>
            {/* Wallet Info */}
            <div className="flex flex-col divide-y">
              <div className="p-6 flex-1 flex flex-col justify-center hover:bg-muted/30 transition-colors">
                <div className="text-xs text-muted-foreground mb-1">
                  WALLET_ADDRESS
                </div>
                {isConnected && publicKey ? (
                  <div className="text-sm font-bold font-mono text-green-500">
                    {publicKey.slice(0, 8)}...{publicKey.slice(-8)}
                  </div>
                ) : (
                  <div className="text-sm font-bold font-mono text-muted-foreground">
                    Not Connected
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center hover:bg-muted/30 transition-colors">
                <div className="text-xs text-muted-foreground mb-1">
                  CHAIN_NETWORK
                </div>
                {network ? (
                  <div className="text-sm font-bold text-green-500">{network}</div>
                ) : (
                  <div className="text-sm font-bold text-muted-foreground">Not Connected</div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <FreighterConnect />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border border-t-0 corner-accents grid grid-cols-3 divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 hover:bg-muted/30 transition-colors"
            >
              <div className="text-xs text-muted-foreground font-bold">
                [{stat.label.toUpperCase().replace(/ /g, "_")}]
              </div>
              <div className="text-2xl font-bold text-accent mt-2">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Active Tickets */}
        <div className="border border-t-0 corner-accents">
          <div className="p-6 md:p-8 border-b">
            <h2 className="text-2xl font-bold tracking-tight">
              [ACTIVE_TICKETS]
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y">
            {activeTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="p-6 hover:bg-muted/30 transition-colors group flex flex-col"
              >
                <div className="space-y-4 flex-1 flex flex-col">
                  {/* Ticket Image */}
                  <div className="aspect-video border corner-accents overflow-hidden bg-black relative">
                    <div
                      className="w-full h-full bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${ticket.image})`,
                      }}
                    ></div>
                    <div className="absolute top-3 left-3 border corner-accents bg-accent/10 text-accent px-2 py-1 text-xs font-bold">
                      [{ticket.status}]
                    </div>
                    <div className="absolute top-3 right-3 text-xs border corner-accents px-2 py-1 bg-black/80 backdrop-blur-sm">
                      {ticket.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Ticket Info */}
                  <div className="flex-1 border corner-accents p-3 bg-muted/10">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-bold text-sm tracking-tight group-hover:text-accent transition-colors">
                        {ticket.eventName}
                      </h3>
                      <div className="text-xs text-accent font-mono border corner-accents px-2 py-0.5 bg-accent/5">
                        {ticket.tokenId}
                      </div>
                    </div>
                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <span className="text-accent">&gt;</span>
                        <span>DATE: {ticket.date}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">&gt;</span>
                        <span>TIME: {ticket.time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent">&gt;</span>
                        <span>LOCATION: {ticket.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-3 divide-x border corner-accents">
                    <button className="p-3 flex flex-col items-center gap-1.5 hover:bg-accent/5 transition-colors">
                      <QrCode className="w-4 h-4 text-accent" />
                      <span className="text-xs font-bold">[VIEW]</span>
                    </button>
                    <button className="p-3 flex flex-col items-center gap-1.5 hover:bg-accent/5 transition-colors">
                      <Send className="w-4 h-4 text-accent" />
                      <span className="text-xs font-bold">[SEND]</span>
                    </button>
                    <button className="p-3 flex flex-col items-center gap-1.5 hover:bg-accent/5 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-accent" />
                      <span className="text-xs font-bold">[SELL]</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Tickets */}
        {pastTickets.length > 0 && (
          <div className="border border-t-0 corner-accents">
            <div className="p-6 md:p-8 border-b">
              <h2 className="text-2xl font-bold tracking-tight">
                [PAST_EVENTS]
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y md:divide-y-0">
              {pastTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-6 hover:bg-muted/30 transition-colors group flex flex-col opacity-60"
                >
                  <div className="space-y-4 flex-1 flex flex-col">
                    {/* Ticket Image */}
                    <div className="aspect-square border corner-accents overflow-hidden bg-black relative">
                      <div
                        className="w-full h-full bg-contain bg-center bg-no-repeat grayscale"
                        style={{
                          backgroundImage: `url(${ticket.image})`,
                        }}
                      ></div>
                      <div className="absolute top-3 left-3 border corner-accents bg-muted px-2 py-1 text-xs font-bold">
                        [{ticket.status}]
                      </div>
                    </div>

                    {/* Ticket Info */}
                    <div className="flex-1 border corner-accents p-3 bg-muted/10">
                      <h3 className="font-bold tracking-tight text-sm mb-2">
                        {ticket.eventName}
                      </h3>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex gap-2">
                          <span className="text-accent">&gt;</span>
                          <span>{ticket.date}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-accent">&gt;</span>
                          <span>TOKEN: {ticket.tokenId}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="border corner-accents flex hover:bg-accent/5 cursor-pointer transition-colors items-center justify-center gap-2 px-3 py-2">
                      <Download className="w-4 h-4 text-accent" />
                      <span className="text-xs font-bold">[DOWNLOAD]</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State (if no tickets) */}
        {tickets.length === 0 && (
          <div className="border border-t-0 corner-accents p-12 md:p-24">
            <div className="max-w-md mx-auto">
              <div className="border corner-accents p-8 bg-muted/5 space-y-6">
                <div className="border corner-accents w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto">
                  <QrCode className="w-8 h-8 text-accent" />
                </div>
                <div className="text-center space-y-3">
                  <h2 className="text-2xl font-bold">[NO_TICKETS_FOUND]</h2>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>&gt; COLLECTION_EMPTY</p>
                    <p>&gt; START_COLLECTING_NFT_TICKETS</p>
                  </div>
                </div>
                <Link href="/discover" className="block">
                  <div className="border corner-accents flex hover:bg-accent hover:text-white cursor-pointer transition-colors items-center justify-center gap-2 px-4 py-3 bg-accent/5">
                    <span className="text-sm font-bold">[DISCOVER_EVENTS]</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
