
import Top_nav from "./home.jsx";

import { BackgroundBeams } from "./components/background-beams";
import { MaskContainer } from "./components/svg-mask-effect";
import { TracingBeam } from "./components/tracing-beam";
import { AsciiArtDemo } from "./components/pic.jsx";
import { CardStackDemo } from "./components/card.jsx";

import ComboBox from "./components/ComboBox.jsx";

import Page2 from "./page2.jsx";
import Page3 from "./page3.jsx";

import {
  TooltipCardDemo,
  CardHoverEffectDemo,
  CardSpotlightDemo,
  InfiniteMovingCardsDemo,
  CometCardDemo,
  LayoutTextFlipDemo,
  TextGenerateEffectDemo,
  TextHoverEffectDemo,
  MovingBorderDemo,
  AnimatedTooltipPreview,
} from "./test.jsx";

import {
  AnimatedTestimonialsDemo,
  FeaturesSectionDemo,
  TimelineDemo,
} from "./test2.jsx";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* Navigation */}
      <header className="relative z-50">
        <Top_nav />
      </header>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative flex w-screen max-w-none items-center justify-center px-6 py-20 ">
          <MaskContainer
            revealText={
              <span className="text-4xl font-bold text-black dark:text-white md:text-6xl ">
                Hover over here 
              </span>
            }
            revealSize={600}
            theme="dark"
          >
            <h1 className="text-center text-3xl font-bold text-neutral-500 md:text-5xl">
              work in progress
            </h1>
          </MaskContainer>
        </section>

        {/* Interactive Cards */}
        <section className="space-y-20 px-6 py-16">
          <TooltipCardDemo />

          <CardHoverEffectDemo />

          <CardSpotlightDemo />

          <CardStackDemo className="relative z-10 px-6 py-16" />
          <div className="flex ">
            <CometCardDemo src="https://images.pexels.com/photos/32027611/pexels-photo-32027611.jpeg" />
            <CometCardDemo src="https://images.pexels.com/photos/39820657/pexels-photo-39820657.jpeg" />
            <CometCardDemo src="https://images.pexels.com/photos/39820657/pexels-photo-39820657.jpeg" />
            <CometCardDemo src="https://images.pexels.com/photos/39820657/pexels-photo-39820657.jpeg" />
            <CometCardDemo src="https://images.pexels.com/photos/39820657/pexels-photo-39820657.jpeg" />
          </div>

          <div className="flex bg-gray-500 items-center justify-center text-white px-6 py-16">
            <ComboBox/>
          </div>

        </section>

        {/* Animated Components */}
        <section className="space-y-20 px-6 py-16">
          
          <InfiniteMovingCardsDemo />

          <LayoutTextFlipDemo />

          <TextGenerateEffectDemo />

          <TextHoverEffectDemo />

          <MovingBorderDemo />

          <AnimatedTooltipPreview />
        </section>

        {/* Visual Effects */}
        <section className="space-y-20 px-6 py-16">
          <AsciiArtDemo />

          <AnimatedTestimonialsDemo />

          <FeaturesSectionDemo />

          <TimelineDemo />


         
        </section>
      </div>

      {/* Scroll Effect */}
      {/* <div className="pointer-events-none absolute inset-0 z-20">
        <TracingBeam />
      </div> */}
      <Page2 />
      <Page3 />
    </main>
  );
}
