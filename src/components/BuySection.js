import React, { useEffect, useState } from "react";
import "./BuySectionDesktop.css";
import "./BuySectionMobile.css";
const frameImage = "/chloebuy.png";

const BuySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Detectar en la carga inicial
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Inicializar el widget de Jupiter
  useEffect(() => {
    const initializeWidget = () => {
      try {
        const container = document.getElementById("jupiter-terminal");
        if (container && window.Jupiter && !container.hasChildNodes()) {
          console.log("Inicializando widget de Jupiter...");
          window.Jupiter.init({
            displayMode: "integrated",
            integratedTargetId: "jupiter-terminal",
            endpoint:
              "https://mainnet.helius-rpc.com/?api-key=0ef06867-bb05-49c5-a4ea-7d1b97ee8126",
            formProps: {
              initialInputMint: "So11111111111111111111111111111111111111112",
              initialOutputMint: "7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump",
              fixedInputMint: false,
              fixedOutputMint: false,
              initialAmount: 1000000000,
              exactIn: true,
            },
            strictTokenList: true,
            theme: "dark",
          });
        }
      } catch (error) {
        console.error("Error inicializando el widget de Jupiter:", error);
      }
    };

    if (window.Jupiter) {
      initializeWidget();
    } else {
      console.error("El script de Jupiter no está disponible.");
    }

    return () => {
      const container = document.getElementById("jupiter-terminal");
      if (container) container.innerHTML = ""; // Limpia el contenedor
    };
  }, []);

  const platforms = [
    {
      name: "CoinMarketCap",
      url: "https://coinmarketcap.com/dexscan/solana/BsAbARTbAtkx4nPxHttc7H6dvL4e8Phm4xCAkBopzcY2/",
    },
    {
      name: "Dexscreener",
      url: "https://dexscreener.com/solana/bsabartbatkx4npxhttc7h6dvl4e8phm4xcakbopzcy2",
    },
    {
      name: "Birdeye",
      url: "https://www.birdeye.so/token/7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump?chain=solana",
    },
    {
      name: "Solscan",
      url: "https://solscan.io/token/7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump",
    },
    {
      name: "GeckoTerminal",
      url: "https://www.geckoterminal.com/solana/pools/BsAbARTbAtkx4nPxHttc7H6dvL4e8Phm4xCAkBopzcY2?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults",
    },
    {
      name: "DexsTools",
      url: "https://www.dextools.io/app/es/solana/pair-explorer/BsAbARTbAtkx4nPxHttc7H6dvL4e8Phm4xCAkBopzcY2?t=1739873767366",
    },
  ];

  return (
    <div id="how-to-buy">
      <div className={isMobile ? "buy-section-mobile" : "buy-section-desktop"}>
        {isMobile ? (
          // Versión móvil
          <div className="buy-section-content-mobile">
            <div className="buy-text-mobile">
              <h2 className="buy-title-mobile">Get Your $CHLOE</h2>
              <p className="buy-description-mobile">
                Bruh… still not holding $CHLOE? Even Chloe’s confused.
                The internet’s favorite reaction now has its own token—because why not?
              </p>
            </div>

            <div className="widget-container-mobile">
              <img
                src={frameImage}
                alt="Frame"
                className="character-image-mobile"
              />
              <div
                id="jupiter-terminal"
                className="jupiter-terminal-mobile"
              ></div>
            </div>

            <div className="platforms-container-mobile">
              <h3 className="platforms-title-mobile">
                $CHLOE can be found on these platforms
              </h3>
              <div className="platforms-buttons-mobile">
                {platforms.map((platform) => (
                  <a
                  key={platform.name}
                  className="platform-button-mobile"
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.name}
                </a>
                
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Versión desktop
          <div className="buy-section-content-desktop">
            <div className="buy-text-desktop">
              <h2 className="buy-title-desktop">Get Your $CHLOE</h2>
              <p className="buy-description-desktop">
                Bruh… still not holding $CHLOE? Even Chloe’s confused.
                The internet’s favorite reaction now has its own token—because why not?
              </p>
            </div>

            <div className="widget-container-desktop">
              <img
                src={frameImage}
                alt="Frame"
                className="character-image-desktop"
              />
              <div
                id="jupiter-terminal"
                className="jupiter-terminal-desktop"
              ></div>
            </div>

            <div className="platforms-container">
              <h3 className="platforms-title">
                $CHLOE can be found on these platforms
              </h3>
              <div className="platforms-buttons">
                {platforms.map((platform) => (
                  <a
                  key={platform.name}
                  className="platform-button-mobile"
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.name}
                </a>
                
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuySection;
