"use client";

import { useEffect } from "react";
import Script from "next/script";

const PixelTracker = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
      if (pixelId) {
        // @ts-ignore
        window.fbq("init", pixelId);
        // @ts-ignore
        window.fbq("track", "PageView");
      }
    }
  }, []);

  return null;
};

export default PixelTracker;
