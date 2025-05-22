import "./App.css";
import GlobalFooter from "./components/GlobalFooter";
import GlobalNavbar from "./components/GlobalNavbar";
import HeroSection from "./components/HeroSection";
import LatestArticles from "./components/LatestArticles";
import SubSection from "./components/SubSection";
import { SidebarProvider } from "./components/SidebarProvider";
import { Backdrop } from "./components/Backdrop";

function App() {
  return (
    <div className="relative">
      <SidebarProvider>
        <GlobalNavbar />
        <Backdrop />
      </SidebarProvider>
      <HeroSection />
      <SubSection />
      <LatestArticles />
      <GlobalFooter />
    </div>
  );
}

export default App;
