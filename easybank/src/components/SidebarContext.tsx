import { createContext } from "react";

interface SidebarContextType {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
