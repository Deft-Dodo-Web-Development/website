"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@components/dialog";
import { Play } from "lucide-react";
import { MediaResponse } from "@/modules/common/types/common";
import { AppConfig } from "@/config/app.config";

type HeroVideoProps = {
  youtube_video_hash?: string;
  overlay?: MediaResponse;
};

const HeroVideo: React.FC<HeroVideoProps> = ({
  youtube_video_hash,
  overlay,
}) => {
  const [playing, setPlaying] = useState(false);

  if (!overlay) return null;
  const imageSize = overlay?.data?.attributes.formats.large;
  return (
    <>
      {imageSize && (
        <div
          className="cursor-pointer relative group"
          onClick={() => setPlaying(true)}
        >
          <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-16 text-white-16 group-hover:text-white transition-all duration-300 ease-in-out group-hover:size-20 fill-white-16 group-hover:fill-white-56" />
          <Image
            src={`${AppConfig.strapi.url}${imageSize.url}`}
            alt={overlay?.data.attributes.alternativeText || "Hero Carousel"}
            width={imageSize.width}
            height={imageSize.height}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>
      )}

      {playing && (
        <Dialog open={playing} onOpenChange={setPlaying}>
          <DialogContent className="p-1 bg-primary w-[85vw] max-w-[1200px]">
            {!!youtube_video_hash && (
              <div className="embed-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtube_video_hash}?autoplay=1&loop=1`}
                  allow="autoplay;"
                ></iframe>
              </div>
            )}
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
