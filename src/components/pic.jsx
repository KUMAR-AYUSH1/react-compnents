"use client";
import { AsciiArt } from "./ascii-art";

export function AsciiArtDemo() {
  return (
    <AsciiArt
      src="https://images.pexels.com/photos/33516890/pexels-photo-33516890.jpeg"
      resolution={100}
      color="var(--color-neutral-500)"
      animationStyle="fade"
      animationDuration={1.5}
      animateOnView={false}
      className="mx-auto aspect-square w-full max-w-lg bg-neutral-950" />
  );
}
