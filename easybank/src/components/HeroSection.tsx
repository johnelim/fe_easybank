import RequestInvite from "./RequestInvite";
import Mockup from "../assets/image-mockups.png";
import DesktopBg from "../assets/bg-intro-desktop.svg";

export default function HeroSection() {
  return (
    <section className="hero">
      <MobileBackdrop />
      <div className="flex items-center justify-center w-full sm:w-1/2">
        <div className="w-full p-4 max-w-72 flex flex-col items-center justify-center gap-4 mb-8">
          <h1 className="text-4xl">Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestInvite />
        </div>
      </div>
      <DesktopBackdrop />
    </section>
  );
}

function MobileBackdrop() {
  return (
    <div className="sm:hidden relative w-screen h-96 bg-cover bg-[url('/src/assets/bg-intro-mobile.svg')] overflow-clip">
      <img
        src={Mockup}
        alt="mockups"
        className="absolute z-10 bottom-2 -translate-x-1/2 left-1/2"
      />
    </div>
  );
}

function DesktopBackdrop() {
  return (
    <>
      <img
        src={DesktopBg}
        alt="intro-background"
        className="absolute w-1/2 right-0 top-0 h-full aspect-square object-cover hidden sm:block -z-20"
      />
      <img
        src={Mockup}
        alt="description"
        className="absolute w-1/2 -bottom-24 right-0 hidden sm:block -z-10"
      />
    </>
  );
}
