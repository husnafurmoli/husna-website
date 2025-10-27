import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

export type RouteContextValue = {
  path: string;
  navigate: (to: string) => void;
};

const RouteContext = createContext<RouteContextValue | undefined>(undefined);

export function RouteProvider({ value, children }: { value: RouteContextValue; children: ReactNode }) {
  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
}

export function useRoute() {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRoute must be used within a RouteProvider');
  }
  return context;
}
