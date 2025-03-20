import Image from "next/image";
import lock from '@/assets/svgs/Lock.svg'
import NFT from '@/assets/svgs/NFT.svg'
import airdrops from '@/assets/svgs/airDrops.svg'

export const whyJoinData = [
  {
    id: 1,
    icon: <Image src={lock} alt="airdrops" className="h-[30px] w-[30px] "/>,
    title: "Early Access Perks",
    description: "Be among the first to own game field tokens!",
    link: ""
  },
  {
    id: 2,
    icon: <Image src={NFT} alt="airdrops" className="h-[30px] w-[30px] "/>,
    title: "Exclusive Airdrops",
    description: "Earn $TSTRT rewards at the token launch!",
    link: ""
  },
  {
    id: 3,
    icon: <Image src={airdrops} alt="airdrops" className="h-[30px] w-[30px] "/>,
    title: "NFT Pre-Mint Access",
    description: "Test the first wave of digital collectibles.",
    link: ""
  },
];
