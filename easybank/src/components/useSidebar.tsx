import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("use Menu must be used within a MenuProvider");
  return context;
};
