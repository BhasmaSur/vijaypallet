import React, { useMemo, useState } from "react";
import "./tabs.css"; // External CSS file for styling
import nailless from "../image/nailless";
import skidded from "../image/skidded";
import pinewoodpallet from "../image/pinewoodpallet";
import woodenpackagingcrate from "../image/woodenpackagingcrate";
import cabledrums from "../image/cabledrums";

const ResponsiveTabs = ({ websiteDetails }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "boxesTitle", content: "boxesContent", imgSrc: "nailless" },
    { title: "woodenPallets", content: "woodenPalletsContent" },
    { title: "palletCollars", content: "palletCollarsContent" },
    { title: "cableDrums", content: "cableDrumsContent" },
    { title: "customPackaging", content: "customPackagingContent" },
    { title: "productBrandingTitle", content: "productBrandingContent" },
  ];

  const imgSrc = useMemo(() => {
    switch (activeTab) {
      case 0:
        return nailless;
      case 1:
        return pinewoodpallet;
      case 2:
        return "./assets/palletColor.webp";
      case 3:
        return cabledrums;
      case 4:
        return woodenpackagingcrate;
      case 5:
        return "./assets/productBranding.png";
      default:
        return skidded;
    }
  }, [activeTab]);

  const getSrc = () => {};

  return (
    <div className="tabs-container">
      {/* Tab Header */}
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-title ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {websiteDetails[tab.title]}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        <div class="grid-container">
          <div class="grid-item">
            <img src={imgSrc} />
          </div>
          <div class="grid-item">
            <p>{websiteDetails[tabs[activeTab].content]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTabs;
