import CommunityEngagement from "@/components/Screen2Components/CommunityEngagement/CommunityEngagement";
import FAQs from "@/components/Screen2Components/FAQs/FAQs";
import HeroSection from "@/components/Screen2Components/HeroSection/HeroSection";
import JoinCommunity from "@/components/Screen2Components/JoinCommunity/JoinCommunity";
import LearnMore from "@/components/Screen2Components/LearnMore/LearnMore";
import WhatIsTKNSports from "@/components/Screen2Components/WhatIsTKNSports/WhatIsTKNSports";
import WhyJoinNow from "@/components/Screen2Components/WhyJoinNow/WhyJoinNow";

export default function Screen2() {
    return (
      <div className="container">
        <HeroSection />
        <JoinCommunity />
        <WhatIsTKNSports />
        <WhyJoinNow />
        <CommunityEngagement />
        {/* <ParallaxScrollDemo /> */}
        <LearnMore />
        <FAQs />
        
      </div>
    );
  }
  