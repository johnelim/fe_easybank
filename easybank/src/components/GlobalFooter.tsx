import EasybankLogo from "../assets/logo-white.svg?react";
import FacebookIcon from "../assets/icon-facebook.svg?react";
import YoutubeIcon from "../assets/icon-youtube.svg?react";
import TwitterIcon from "../assets/icon-twitter.svg?react";
import PinterestIcon from "../assets/icon-pinterest.svg?react";
import InstagramIcon from "../assets/icon-instagram.svg?react";
import RequestInvite from "./RequestInvite";

export default function GlobalFooter() {
  return (
    <footer>
      {/* Mobile Footer */}
      <div className="flex flex-col justify-center items-center sm:hidden bg-dark-blue p-6 gap-4 text-white">
        <EasybankLogo />
        <SocialMediaLinks />
        <FooterLinks />
        <RequestInvite />
        <Copyright />
      </div>

      {/* Desktop footer */}
      <div className="hidden sm:flex bg-dark-blue h-36 p-16 pt-8 pb-8 text-white justify-between">
        <div className="flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <EasybankLogo />
            <SocialMediaLinks />
          </div>
          <FooterLinks />
        </div>
        <div className="flex flex-col justify-between h-full">
          <RequestInvite />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

export function Copyright() {
  return <p className="text-xs">© Easybank. All Rights Reserved</p>;
}

export function FooterLinks() {
  return (
    <ul className="flex flex-col gap-4 text-sm sm:gap-0 sm:grid sm:grid-cols-2 sm:text-xs">
      {footerNames.map((footerName) => (
        <button key={footerName}>{footerName}</button>
      ))}
    </ul>
  );
}

export function SocialMediaLinks() {
  return (
    <ul className="gap-2 flex pl-5">
      <button type="button">
        <FacebookIcon />
      </button>
      <button type="button">
        <YoutubeIcon />
      </button>

      <button type="button">
        <TwitterIcon />
      </button>

      <button type="button">
        <PinterestIcon />
      </button>

      <button type="button">
        <InstagramIcon />
      </button>
    </ul>
  );
}

const footerNames: string[] = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];
