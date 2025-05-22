import { useSidebar } from "./useSidebar";

export function Backdrop() {
  const { isOpen } = useSidebar();

  return isOpen ? <div className="backdrop" /> : <></>;
}
