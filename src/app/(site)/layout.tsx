import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import GalaxyBackground from "@/components/three/GalaxyBackground";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <GalaxyBackground />
      <div className="relative z-10 min-h-screen">
        <Navigation />
        {children}
        <Footer />
      </div>
      <CustomCursor />
    </>
  );
}