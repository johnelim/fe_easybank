import { type ReactNode, useState } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <SidebarContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
