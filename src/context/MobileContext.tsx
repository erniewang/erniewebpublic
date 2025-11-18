import { createContext, useContext, ReactNode } from 'react';

interface MobileContextType {
  isMobile: boolean;
}

//a usecontext needs a root place starting
const MobileContext = createContext<MobileContextType | undefined>(undefined);
export function MobileProvider({ children, isMobile }: { children: ReactNode; isMobile: boolean }) {
  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
}

//custom hook that is based off of a usecontext
export function useMobile() {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error('useMobile must be used within MobileProvider');
  }
  return context.isMobile;
}

