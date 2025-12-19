import Navigation from "@/components/sections/navigation";
import MaintenanceBanner from "@/components/sections/maintenance-banner";
import HeroSearch from "@/components/sections/hero-search";
import InfoCards from "@/components/sections/info-cards";
import GenreExplorer from "@/components/sections/genre-explorer";
import TopRatedGrid from "@/components/sections/top-rated-grid";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-6 py-8 space-y-12">
        <MaintenanceBanner />
        
        <HeroSearch />
        
        <div className="space-y-16">
          <TopRatedGrid />
          
          <GenreExplorer />
          
          <InfoCards />
        </div>
      </main>

      <Footer />
    </div>
  );
}
