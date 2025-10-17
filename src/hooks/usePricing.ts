import { useEffect, useState } from "react";

const pricingByCountry = {
  IN: {
    currency: "₹",
    plans: {
      free: 0,
      plus: 299,
      premium: 799,
      creator: 1999,
      creatorOriginal: 2499,
    },
  },
  US: {
    currency: "$",
    plans: {
      free: 0,
      plus: 9.99,
      premium: 14.99,
      creator: 29.99,
      creatorOriginal: 34.99,
    },
  },
  GB: {
    currency: "£",
    plans: {
      free: 0,
      plus: 7.99,
      premium: 11.99,
      creator: 24.99,
      creatorOriginal: 29.99,
    },
  },
};

export const usePricing = () => {
  const [countryCode, setCountryCode] = useState("GB");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setCountryCode(data.country_code || "GB");
      } catch (error) {
        console.error("Geo IP lookup failed, defaulting to UK", error);
        setCountryCode("GB");
      }
    };

    fetchCountry();
  }, []);

  const pricing =
    pricingByCountry[countryCode as keyof typeof pricingByCountry] ??
    pricingByCountry["GB"];

  return { countryCode, pricing };
};
