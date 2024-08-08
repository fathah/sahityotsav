import GuestLayout from "@/components/layout/GuestLayout";
import HomeHero from "./(comps)/HomeHero";
import HomeAbout from "./(comps)/About";
import ResultSection from "./(comps)/ResultSection";
import CoreConfigs from "@/models/configs/core_configs_model";
import LiveStream from "./(comps)/LiveStream";

const HomePage = async() => {
  const configs = await CoreConfigs.getCoreConfigs();

  
  return (
    <GuestLayout>
      <HomeHero configs={configs}/>
      <HomeAbout  configs={configs}/>
      <ResultSection  configs={configs}/>
      <LiveStream/>
    </GuestLayout>
  );
}

export default HomePage;

export const revalidate = 60;
