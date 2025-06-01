"use client";

import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    fbq: any;
  }
}

export const useFacebookPixel = () => {
  const trackPageView = useCallback(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, []);

  const trackLead = useCallback((value?: number) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        value: value,
        currency: "BRL",
      });
    }
  }, []);

  const trackContact = useCallback((method: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        method: method,
      });
    }
  }, []);

  const trackWhatsAppClick = useCallback(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "WhatsAppClick");
    }
  }, []);

  const trackTelegramClick = useCallback(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "TelegramClick");
    }
  }, []);

  const trackFormSubmit = useCallback((formName: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "FormSubmit", {
        formName: formName,
      });
    }
  }, []);

  const trackScroll = useCallback((section: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Scroll", {
        section: section,
      });
    }
  }, []);

  return {
    trackPageView,
    trackLead,
    trackContact,
    trackWhatsAppClick,
    trackTelegramClick,
    trackFormSubmit,
    trackScroll,
  };
};
