import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchRates() {
      try {
        // IMPORTANT: lowercase currency for correct URL
        const cur = currency.toLowerCase();

        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${cur}.json`
        );

        const json = await res.json();

        // json looks like { usd: { inr: 82, eur: 0.9, ... } }
        setData(json[cur]); 
      } catch (error) {
        console.error("Failed to load currency rates:", error);
        setData({});
      }
    }

    fetchRates();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
