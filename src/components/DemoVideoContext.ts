import { createContext, useContext } from "react";

type DemoVideoContextValue = {
  openDemoVideo: () => void;
};

export const DemoVideoContext = createContext<DemoVideoContextValue | null>(null);

export function useDemoVideo() {
  const context = useContext(DemoVideoContext);

  if (!context) {
    throw new Error("useDemoVideo must be used within DemoVideoProvider");
  }

  return context;
}
