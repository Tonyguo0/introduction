import { useState, useEffect } from 'react';

export interface DeviceCapabilities {
  isMobile: boolean;
  isLowEnd: boolean;
  supportsWebGL: boolean;
  memoryLimit: number;
}

export const useDeviceCapabilities = (): DeviceCapabilities => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isLowEnd: false,
    supportsWebGL: false,
    memoryLimit: 0
  });

  useEffect(() => {
    const detectCapabilities = () => {
      // Mobile detection
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                      window.innerWidth <= 768;

      // WebGL support detection
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const supportsWebGL = !!gl;

      // Memory detection (approximate)
      const memoryLimit = (navigator as any).deviceMemory || 
                         (navigator as any).hardwareConcurrency * 512 || 
                         (isMobile ? 2048 : 4096);

      // Low-end device detection
      const isLowEnd = isMobile && (
        memoryLimit < 3000 || 
        navigator.hardwareConcurrency <= 2 ||
        /Android.*; wv\)/i.test(navigator.userAgent) // WebView detection
      );

      setCapabilities({
        isMobile,
        isLowEnd,
        supportsWebGL,
        memoryLimit
      });
    };

    detectCapabilities();
  }, []);

  return capabilities;
};

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};