'use client'
import CommunityEngagement from "@/components/CommunityEngagement/CommunityEngagement";
import FAQ from "@/components/FAQ/FAQ";
import HeroSection from "@/components/HeroSection/HersoSection";
import JoinCommunity from "@/components/JoinCommunity/JoinCommunity";
import LearnMore from "@/components/LearnMore/LearnMore";
// import Globe from "@/components/shared/Globe/Globe";
import WhatIsTKNSports from "@/components/WhatIsTKNSports/WhatIsTKNSports";
import WhyJoinNow from "@/components/WhyJoinNow/WhyJoinNow";

export default function Home() {
  return (
    <>
      <HeroSection />
    <div className="flex flex-col container ">
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vero reiciendis consequuntur fugit recusandae dolores veritatis maiores sequi, et atque eligendi! Accusamus, facere pariatur similique velit dolorem quo earum reprehenderit.
      <span className="font-[family-name:var(--font-bruno)]">Lorem ipsum dolor sit amet consectetur adipisicing.</span> */}
      <JoinCommunity />
      <WhatIsTKNSports />
      <WhyJoinNow />
      <CommunityEngagement />
      <LearnMore />
      <FAQ />
      {/* <Globe className="w-full h-full"/> */}

      {/* <HeroSection /> */}
    </div>
    </>
  );
}
