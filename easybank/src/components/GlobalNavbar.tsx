import EasybankLogo from "../assets/logo.svg?react";
import CloseIcon from "../assets/icon-close.svg?react";
import MenuIcon from "../assets/icon-hamburger.svg?react";
import RequestInvite from "./RequestInvite";
import { useSidebar } from "./useSidebar";

export default function GlobalNavbar() {
  return (
    <header className="header">
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
}

function MobileNavbar() {
  const { isOpen, toggleOpen } = useSidebar();

  return (
    <nav className="sm:hidden navbar">
      <EasybankLogo />
      <button type="button" onClick={toggleOpen}>
        {isOpen && <CloseIcon className="fill-lime-green" />}
        {!isOpen && <MenuIcon />}
      </button>
      {isOpen && <PopupMenuButtons />}
    </nav>
  );
}

function DesktopNavbar() {
  return (
    <nav className="hidden sm:flex sm:justify-between sm:items-center">
      <EasybankLogo />
      <DesktopMenuButtons />
      <RequestInvite />
    </nav>
  );
}

function DesktopMenuButtons() {
  return (
    <ul className="flex justify-between gap-4">
      {menuItems.map((item) => (
        <button key={item} className="navbar-buttons group">
          <span className="h-full flex items-center bg-white">{item}</span>
          <span className="absolute w-full bottom-0 h-0.5 bg-gradient-to-r from-lime-green to-bright-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      ))}
    </ul>
  );
}

function PopupMenuButtons() {
  return (
    <ul className="flex flex-col absolute top-24 w-9/10 z-40 bg-white gap-2 p-4 rounded-sm text-dark-blue">
      {menuItems.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </ul>
  );
}

const menuItems: string[] = ["Home", "About", "Contact", "Blog", "Careers"];
