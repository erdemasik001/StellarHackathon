"use client";

import { useFreighter } from "@/providers/FreighterProvider";
import { Button } from "@/components/ui/button";

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

  const handleConnect = async () => {
    try {
      await connect();
    } catch (err) {
      console.error("Bağlantı hatası:", err);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (err) {
      console.error("Bağlantı kesme hatası:", err);
    }
  };

  if (isLoading) {
    return (
      <Button disabled>
        Yükleniyor...
      </Button>
    );
  }

  if (error) {
    return (
      <div className="space-y-2">
        <Button onClick={handleConnect} variant="destructive">
          Tekrar Bağlan
        </Button>
        <p className="text-sm text-red-500">{error}</p>
      </div>
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

