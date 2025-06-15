"use client";

import React from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Brand logo configuration using Brandfetch Logo Link with optimized sizing per logo type
const italianLogos = [
  { 
    name: "GoHighLevel", 
    id: 1, 
    domain: "gohighlevel.com",
    url: "https://cdn.brandfetch.io/gohighlevel.com/w/400/h/100/theme/light/logo?c=1idcDpJ04hodrruPsiH"
  },
  { 
    name: "OpenAI", 
    id: 2, 
    domain: "openai.com",
    url: "https://cdn.brandfetch.io/openai.com/w/300/h/304/theme/light/symbol?c=1idcDpJ04hodrruPsiH"
  },
  { 
    name: "Meta", 
    id: 3, 
    domain: "meta.com",
    url: "https://cdn.brandfetch.io/meta.com/w/400/h/100/theme/light/logo?c=1idcDpJ04hodrruPsiH"
  },
  { 
    name: "N8N", 
    id: 4, 
    domain: "n8n.io",
    url: "https://cdn.brandfetch.io/n8n.io/w/400/h/100/logo?c=1idcDpJ04hodrruPsiH"
  },
  { 
    name: "Google", 
    id: 5, 
    domain: "google.com",
    url: "https://cdn.brandfetch.io/google.com/w/512/h/161/logo?c=1idcDpJ04hodrruPsiH"
  },
  { 
    name: "Slack", 
    id: 6, 
    domain: "slack.com",
    url: "https://cdn.brandfetch.io/slack.com/w/150/h/150/symbol?c=1idcDpJ04hodrruPsiH"
  },
];

export function LogoCarouselSection() {
  const [columnCount, setColumnCount] = React.useState(3);

  React.useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth < 640) {
        setColumnCount(2); // mobile: 2 columns
      } else if (window.innerWidth < 1024) {
        setColumnCount(3); // tablet: 3 columns
      } else {
        setColumnCount(4); // desktop: 4 columns
      }
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  return (
    <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-6 sm:space-y-8 md:space-y-12 px-4 sm:px-6">
        <div className="text-center space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-center font-bold text-white tracking-tight">
            Lavoriamo già con i migliori in Italia
          </h2>
        </div>

        <div className="w-full flex justify-center pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16">
          <LogoCarousel columnCount={columnCount} logos={italianLogos} /> 
        </div>
      </div>
    </div>
  );
} 