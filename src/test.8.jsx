import FlowingMenu from './components/FlowingMenu';

const items = [
  { link: '#', text: 'Mojave', image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Sonoma', image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Monterey', image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' },
  { link: '#', text: 'Sequoia', image: 'https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format' }
];

export  function NewFlowingMenu() {
    return(
        <div style={{ height: '600px', position: 'relative' }}>

            <FlowingMenu
                items={items}
                speed={60}
                stretch={0.6} magnet={0.25} followCursor={0.4} textColor="#ffffff" bgColor="#120F17" marqueeBgColor="#ffffff" marqueeTextColor="#120F17" direction="left" duration={0.5} bandInset={0} bandRadius={0} carryContent={false} borderColor="rgba(255, 255, 255, 0.14)" dividers
                dimInactive={false}
                align="center"
                showIndex={false} showArrow={false} imageShape="pill" intro
            />
        </div>
    )
}



import FlipCard from './components/FlipCard';

export  function NewFlipCard(){return(<FlipCard
  front={<img src="https://images.pexels.com/photos/39131980/pexels-photo-39131980.jpeg" alt="Wooded landscape" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
  back={
    <div style={{ padding: 24 }}>
      <h3>Wooded Landscape</h3>
      <p>17th century · Rijksmuseum</p>
    </div>
  }
  axis="y"
  flipOnClick
  draggable
  dragDistance={0}
  tilt
  tiltMax={12}
  glare
  glareOpacity={0.22}
  hoverScale={1.03}
  perspective={1100}
  stiffness={170}
  damping={20}
  width={300}
  height={400}
  radius={22}
  background="#27272a"
  color="#f5f5f5"
  shadow
  shadowColor="#000000"
  shadowOpacity={0.45}
  onFlipChange={flipped => console.log(flipped)}
/>)}





import { StickyBanner } from "./components/sticky-banner";

export function StickyBannerDemo() {
  return (
    <div className="relative flex h-[60vh] w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Announcing $10M seed funding from project mayhem ventures.{" "}
          <a href="#" className="transition duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 py-8">
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
      <div
        className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
    </div>
  );
};



import { LoaderOne } from "./components/loader";

export function LoaderOneDemo() {
  return <LoaderOne />;
}

import { useState, useEffect } from 'react';

export function LoaderTwoDemo() {
    const [count, setCount] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => !prev);
        }, 18000);

        return () => clearInterval(interval);
    }, []);

    return count ? <LoaderOneDemo /> : <p>ka</p>;

}


"use client";

import { Button } from "./components/stateful-button";

export function StatefulButtonDemo() {
  // dummy API call
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
      console.log("clicked");
    });
  };
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <Button onClick={handleClick}>Send message</Button>
    </div>
  );
}


import { FlipWords } from "./components/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-40rem flex justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
