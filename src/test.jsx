"use client";
import { Tooltip } from "./components/tooltip-card";
import React from "react";

export function TooltipCardDemo() {
  return (
    <div className="mx-auto max-w-2xl p-4 md:p-10">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        There was a problem with the server. Once{" "}
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content="AWS markets itself as the “world's most comprehensive and broadly adopted cloud platform” offering over 200 fully featured services globally.">
          <span className="font-bold">AWS</span>
        </Tooltip>{" "}
        went down, we had to quickly migrate to a new provider. AWS in general
        is a great service, but sometimes it&apos;s not available.
      </p>
      <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
        The server was administered by{" "}
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content={<TooltipCard />}>
          {" "}
          <span className="cursor-pointer font-bold">Tyler Durden.</span>
        </Tooltip>{" "}
        Tyler has been with us for a long time. He is a great asset to the team
        and sometimes tries to act in different ways which can be difficult to
        manage.{" "}
      </p>
      <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
        That is when we approached Tyler for a cute little{" "}
        <Tooltip
          containerClassName="text-neutral-600 dark:text-neutral-400"
          content={<TestimonialCard />}>
          {" "}
          <span className="cursor-pointer font-bold">testimonial.</span>
        </Tooltip>{" "}
        Instead of a testimonial, he started yapping about project mayhem and
        how we should be using our skills to build a better future.
      </p>
    </div>
  );
}

const TooltipCard = () => {
  return (
    <div>
      <img
        src="https://assets.aceternity.com/screenshots/tyler.webp"
        alt="Tyler Durden"
        className="aspect-square w-full rounded-sm" />
      <div className="my-4 flex flex-col">
        <p className="text-lg font-bold">Tyler Durden</p>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          Soap Developer from a Tier 3 college. Enthusiastic and exhibits
          entrepreneurial spirit.
        </p>
      </div>
    </div>
  );
};

const TestimonialCard = () => {
  return (
    <div className="">
      <blockquote className="mb-4 text-neutral-700 dark:text-neutral-300">
        This product is absolutely, grade A horse shit.
      </blockquote>
      <div className="flex items-center gap-2">
        <img
          src="https://assets.aceternity.com/screenshots/tyler.webp"
          alt="Tyler Durden"
          className="size-6 rounded-full object-cover" />
        <div>
          <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
            Tyler Durden
          </p>
          <p className="text-[10px] text-neutral-600 dark:text-neutral-400">
            Senior Product Manager at FC
          </p>
        </div>
      </div>
    </div>
  );
};



import { HoverEffect } from "./components/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];


import { CardSpotlight } from "./components/card-spotlight";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Authentication steps
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Follow these steps to secure your account:
        <ul className="list-none  mt-2">
          <Step title="Enter your email address" />
          <Step title="Create a strong password" />
          <Step title="Set up two-factor authentication" />
          <Step title="Verify your identity" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Ensuring your account is properly secured helps protect your personal
        information and data.
      </p>
    </CardSpotlight>
  );
}

const Step = ({
  title
}) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0" />
    </svg>
  );
};



import { InfiniteMovingCards } from "./components/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];





import { CometCard } from "./components/comet-card";

export function CometCardDemo({ src }) {
  return (
    <CometCard className="w-80">
      <button
        type="button"
        className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
        aria-label="View invitation F7RA"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-3/4 w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-2xl bg-black object-cover contrast-75"
              alt="Invite background"
              src={src}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              }}
            />
          </div>
        </div>

        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Comet Invitation</div>
          <div className="text-xs text-gray-300 opacity-50">
            #F7RA
          </div>
        </div>
      </button>
    </CometCard>
  );
}

"use client";
import { LayoutTextFlip } from "./components/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div
        className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Welcome to "
          words={["Aceternity UI", "Fight Club", "The Matrix", "The Jungle"]} />
      </motion.div>
      <p
        className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p>
    </div>
  );
}


"use client";
import { TextGenerateEffect } from "./components/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}




import { TextHoverEffect } from "./components/text-hover-effect";

export function TextHoverEffectDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="KUMAR" />
    </div>
  );
}


import { Button } from "./components/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
        Borders are cool
      </Button>
    </div>
  );
}





"use client";
import { AnimatedTooltip } from "./components/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "black and white cat",
    image:
      "https://images.pexels.com/photos/32557420/pexels-photo-32557420.jpeg",
  },
  {
    id: 2,
    name: "Johnson",
    designation: "orange cat",
    image:
      "https://images.pexels.com/photos/39495643/pexels-photo-39495643.jpeg",
  },
  {
    id: 3,
    name: "bhoomi",
    designation: "dog",
    image:
      "https://images.pexels.com/photos/29373003/pexels-photo-29373003.jpeg",
  }
  
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}



