"use client";

import { useFreighter } from "@/providers/FreighterProvider";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect } from "react";

export function FreighterConnect() {
  const {
    isConnected,
    publicKey,
    network,
    connect,
    disconnect,
    isLoading,
    error,
  } = useFreighter();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        duration: 5000,
      });
    }
  }, [error]);

  const handleConnect = async () => {
    try {
      await connect();
      toast.success("Successfully connected to Freighter");
    } catch (err) {
      console.error("Connection error:", err);
      // Error is already set in the provider and will be shown via toast
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      toast.success("Disconnected from Freighter");
    } catch (err) {
      console.error("Disconnect error:", err);
      // Error is already set in the provider and will be shown via toast
    }
  };

  if (isLoading) {
    return (
      <Button disabled>
        Loading...
      </Button>
    );
  }

  if (isConnected && publicKey) {
    return (
      <div className="flex items-center gap-2">
        <Button onClick={handleDisconnect} variant="outline" size="sm" className="hidden md:flex">
          Disconnect
        </Button>
        <div className="border corner-accents px-3 py-2 rounded hover:bg-muted/30 transition-colors cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-medium font-mono text-green-500">
              {publicKey.slice(0, 6)}...{publicKey.slice(-4)}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Button onClick={handleConnect} className="font-mono" size="sm">
      Connect
    </Button>
  );
}

