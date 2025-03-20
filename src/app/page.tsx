"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/screen1");
  }, [router]);

  return null; // No UI needed since it's just a redirect
};

export default Page;
