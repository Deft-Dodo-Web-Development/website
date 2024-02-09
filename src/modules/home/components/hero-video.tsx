"use client";

import Image from "next/image";
import videoOverlay from "../assets/image.webp";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/dialog";
const HeroVideo = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Image
        src={videoOverlay}
        alt="Hero Carousel"
        width={1920}
        height={1080}
        priority
        className="cursor-pointer w-full h-auto"
        onClick={() => setPlaying(true)}
      />

      {playing && (
        <Dialog open={playing} onOpenChange={setPlaying}>
          <DialogContent className="p-1 bg-primary w-[85vw] max-w-[1200px]">
            <div className="embed-container">
              <iframe
                src="https://www.youtube.com/embed/SVU02zJ_R4o?autoplay=1&loop=1"
                allow="autoplay;"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <style jsx>{`
        .embed-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          max-width: 100%;
        }
        .embed-container iframe,
        .embed-container object,
        .embed-container embed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default HeroVideo;
