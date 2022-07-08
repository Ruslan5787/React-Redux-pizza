import React from "react";
import ContentLoader from "react-content-loader";

export function LoadingItem() {
  return (
    <ContentLoader
      speed={2.5}
      width={270.27}
      height={470.82}
      viewBox="0 0 281.27 480.82"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="130" />
      <rect x="0" y="316" rx="10" ry="10" width="281" height="99" />
      <rect x="0" y="436" rx="10" ry="10" width="90" height="32" />
      <rect x="136" y="436" rx="15" ry="15" width="142" height="43" />
      <rect x="0" y="277" rx="10" ry="10" width="281" height="24" />
    </ContentLoader>
  );
}
