import DiscordIcon from '../assets/svgs/Discord.svg';
import TwitterIcon from '../assets/svgs/Twitter.svg';
import InstagramIcon from '../assets/svgs/Instagram.svg';
import TelegramIcon from '../assets/svgs/Telegram.svg';
import Tiktok from '../assets/svgs/Tiktok.svg';
import Image from 'next/image';

export const socialMediaLinksData = [
    { title: "Discord", icon: <Image src={DiscordIcon} alt="Discord" className='w-full h-full max-w-[20px]' />, href: "#" },
    { title: "Twitter", icon: <Image src={TwitterIcon} alt="Twitter" className='w-full h-full max-w-[20px]' />, href: "#" },
    { title: "Instagram", icon: <Image src={InstagramIcon} alt="Instagram" className='w-full h-full max-w-[20px]' />, href: "#" },
    { title: "Telegram", icon: <Image src={TelegramIcon} alt="Telegram" className='w-full h-full max-w-[20px]' />, href: "#" },
    { title: "Tiktok", icon: <Image src={Tiktok} alt="Tiktok" className='w-full h-full max-w-[20px]' />, href: "#" },
];
