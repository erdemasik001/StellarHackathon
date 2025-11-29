"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import {
  setAllowed,
  isConnected as checkIsConnected,
  getAddress,
  signTransaction,
  signAuthEntry,
  getNetwork,
  getNetworkDetails,
  requestAccess,
} from "@stellar/freighter-api";

interface FreighterContextType {
  isConnected: boolean;
  publicKey: string | null;
  network: string | null;
  networkPassphrase: string | null;
  networkDetails: { 
    network: string; 
    networkUrl: string; 
    networkPassphrase: string;
    sorobanRpcUrl?: string;
  } | null;
  
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  
  signTransaction: (
    xdr: string, 
    opts?: { networkPassphrase?: string; address?: string }
  ) => Promise<{ signedTxXdr: string; signerAddress: string }>;
  
  signAuthEntry: (
    entryXdr: string, 
    opts?: { networkPassphrase?: string; address?: string }
  ) => Promise<{ signedAuthEntry: string | null; signerAddress: string }>;
  
  getNetwork: () => Promise<{ network: string; networkPassphrase: string }>;
  getNetworkDetails: () => Promise<{ 
    network: string; 
    networkUrl: string; 
    networkPassphrase: string;
    sorobanRpcUrl?: string;
  }>;
  
  checkConnection: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const FreighterContext = createContext<FreighterContextType | undefined>(undefined);

export function FreighterProvider({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [network, setNetworkState] = useState<string | null>(null);
  const [networkPassphrase, setNetworkPassphrase] = useState<string | null>(null);
  const [networkDetails, setNetworkDetailsState] = useState<{ 
    network: string; 
    networkUrl: string; 
    networkPassphrase: string;
    sorobanRpcUrl?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const manuallyDisconnectedRef = useRef(false);
  
  const STORAGE_KEY = 'freighter_manually_disconnected';

  const checkConnection = useCallback(async () => {
    if (typeof window !== 'undefined') {
      const isManuallyDisconnected = localStorage.getItem(STORAGE_KEY) === 'true';
      if (isManuallyDisconnected) {
        manuallyDisconnectedRef.current = true;
        return;
      }
    }
    
    if (manuallyDisconnectedRef.current) {
      return;
    }

    try {
      const connectionResult = await checkIsConnected();
      
      if (connectionResult.error) {
        setError(connectionResult.error.message || "Freighter bağlantısı kontrol edilemedi");
        setConnected(false);
        setPublicKey(null);
        setNetworkState(null);
        setNetworkPassphrase(null);
        setNetworkDetailsState(null);
        return;
      }

      const isConn = connectionResult.isConnected;
      setConnected(isConn);
      
      if (isConn) {
        // Public key al
        const addressResult = await getAddress();
        if (addressResult.error) {
          setError(addressResult.error.message || "Public key alınamadı");
        } else {
          setPublicKey(addressResult.address);
        }

        // Network bilgisi al
        const networkResult = await getNetwork();
        if (networkResult.error) {
          setError(networkResult.error.message || "Network bilgisi alınamadı");
        } else {
          setNetworkState(networkResult.network);
          setNetworkPassphrase(networkResult.networkPassphrase);
        }

        // Network detayları al
        const detailsResult = await getNetworkDetails();
        if (detailsResult.error) {
          // Detaylar opsiyonel, hata olsa bile devam et
        } else {
          setNetworkDetailsState(detailsResult);
        }
      } else {
        setPublicKey(null);
        setNetworkState(null);
        setNetworkPassphrase(null);
        setNetworkDetailsState(null);
      }
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Freighter bağlantısı kontrol edilemedi";
      setError(errorMessage);
      setConnected(false);
      setPublicKey(null);
      setNetworkState(null);
      setNetworkPassphrase(null);
      setNetworkDetailsState(null);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isManuallyDisconnected = localStorage.getItem(STORAGE_KEY) === 'true';
      if (isManuallyDisconnected) {
        manuallyDisconnectedRef.current = true;
        setConnected(false);
        setPublicKey(null);
        setNetworkState(null);
        setNetworkPassphrase(null);
        setNetworkDetailsState(null);
        return;
      }
    }
    
    checkConnection();

    const interval = setInterval(() => {
      checkConnection();
    }, 2000);

    return () => clearInterval(interval);
  }, [checkConnection]);

  const connect = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      manuallyDisconnectedRef.current = false;
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }

      await requestAccess();
      
      await checkConnection();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Freighter'a bağlanılamadı";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [checkConnection]);

  const disconnect = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      manuallyDisconnectedRef.current = true;
      
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, 'true');
      }
      
      setConnected(false);
      setPublicKey(null);
      setNetworkState(null);
      setNetworkPassphrase(null);
      setNetworkDetailsState(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Bağlantı kesilemedi";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSignTransaction = useCallback(async (
    xdr: string,
    opts?: { networkPassphrase?: string; address?: string }
  ) => {
    try {
      const result = await signTransaction(xdr, opts);
      if (result.error) {
        const errorMessage = result.error.message || "İşlem imzalanamadı";
        setError(errorMessage);
        throw new Error(errorMessage);
      }
      return { signedTxXdr: result.signedTxXdr, signerAddress: result.signerAddress };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "İşlem imzalanamadı";
      setError(errorMessage);
      throw err;
    }
  }, []);

  const handleSignAuthEntry = useCallback(async (
    entryXdr: string,
    opts?: { networkPassphrase?: string; address?: string }
  ) => {
    try {
      const result = await signAuthEntry(entryXdr, opts);
      if (result.error) {
        const errorMessage = result.error.message || "Auth entry imzalanamadı";
        setError(errorMessage);
        throw new Error(errorMessage);
      }
      return { signedAuthEntry: result.signedAuthEntry, signerAddress: result.signerAddress };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Auth entry imzalanamadı";
      setError(errorMessage);
      throw err;
    }
  }, []);

  const handleGetNetwork = useCallback(async () => {
    try {
      const result = await getNetwork();
      if (result.error) {
        const errorMessage = result.error.message || "Ağ bilgisi alınamadı";
        setError(errorMessage);
        throw new Error(errorMessage);
      }
      setNetworkState(result.network);
      setNetworkPassphrase(result.networkPassphrase);
      return { network: result.network, networkPassphrase: result.networkPassphrase };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Ağ bilgisi alınamadı";
      setError(errorMessage);
      throw err;
    }
  }, []);

  const handleGetNetworkDetails = useCallback(async () => {
    try {
      const result = await getNetworkDetails();
      if (result.error) {
        const errorMessage = result.error.message || "Ağ detayları alınamadı";
        setError(errorMessage);
        throw new Error(errorMessage);
      }
      setNetworkDetailsState(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Ağ detayları alınamadı";
      setError(errorMessage);
      throw err;
    }
  }, []);

  const value: FreighterContextType = {
    isConnected: connected,
    publicKey,
    network,
    networkPassphrase,
    networkDetails,
    connect,
    disconnect,
    signTransaction: handleSignTransaction,
    signAuthEntry: handleSignAuthEntry,
    getNetwork: handleGetNetwork,
    getNetworkDetails: handleGetNetworkDetails,
    checkConnection,
    isLoading,
    error,
  };

  return (
    <FreighterContext.Provider value={value}>
      {children}
    </FreighterContext.Provider>
  );
}

export function useFreighter() {
  const context = useContext(FreighterContext);
  if (context === undefined) {
    throw new Error("useFreighter must be used within a FreighterProvider");
  }
  return context;
}
