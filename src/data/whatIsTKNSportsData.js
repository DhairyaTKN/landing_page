import { Boxes } from "@/components/ui/background-boxes";
import React from "react";
import earn_rewards from '@/assets/images/earn_rewards.jpg'
import social_engagement from '@/assets/images/social_engagement.png'
import cube from '@/assets/images/cube.png'

const SkeletonOne = () => (
  <div >
    <p className="font-bold md:text-4xl text-xl text-white">
    Claim your free digital field tokens
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    Get exclusive digital field tokens and step into a world of virtual sports ownership. Own a piece of the action today!
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
    Earn rewards based on live game actions
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    Engage in real-time sports events and earn rewards as games unfold. Your knowledge and passion now turn into valuable tokens.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
    Boost earnings with social engagement
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    Share your sports insights, interact with the community, and maximize your token rewards through social engagement.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
    Covert points into $TSPRT tokens
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    Accumulate points through activities and seamlessly convert them into $TSPRT tokens, unlocking more rewards and opportunities.
    </p>
  </div>
);

export const whatIsTKNSportsData = [
  {
    id: 1,
    content: (
      <div className="relative h-full w-full bg-slate-900 rounded-lg flex flex-col items-center justify-center ">
        {/* Overlay for gradient effect */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />
        {/* Background Boxes */}
        <Boxes />
        {/* Actual Content */}
        <div className="relative z-20 text-center text-white">
          <SkeletonOne />
        </div>
      </div>
    ),
    description: "Claim your free digital field tokens",
    className: "md:col-span-1 border border-borderColor overflow-hidden rounded-[10px]",
    backgroundComponent: <Boxes />, // Dynamic background instead of thumbnail
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    description: "Earn rewards based on live game actions.",
    className: "md:col-span-2",
    thumbnail: earn_rewards.src,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    description: "Boost earnings with social engagement",
    className: "md:col-span-2 ",
    thumbnail: social_engagement.src
  },
  {
    id: 4,
    content: <SkeletonFour />,
    description: "Covert points into $TSPRT tokens",
    className: "md:col-span-1",
    thumbnail: cube.src
  },
];
