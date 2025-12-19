import { getTopAnime } from "@/lib/jikan";
import Navigation from "@/components/sections/navigation";
import MaintenanceBanner from "@/components/sections/maintenance-banner";
import HeroSlider from "@/components/sections/HeroSlider";
import HeroSearch from "@/components/sections/hero-search";
import TopRatedGrid from "@/components/sections/top-rated-grid";
import GenreExplorer from "@/components/sections/genre-explorer";
import InfoCards from "@/components/sections/info-cards";
import Footer from "@/components/sections/footer";

export default async function Home() {
  const trendingData = await getTopAnime(1);
  const trending = trendingData.data?.slice(0, 10) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 md:px-8 py-8 space-y-24">
        <MaintenanceBanner />
        
        <div className="space-y-24">
          <HeroSlider trending={trending} />
          <HeroSearch />
          <TopRatedGrid />
          <GenreExplorer />
          <InfoCards />
        </div>
      </main>

      <Footer />
    </div>
  );
}
