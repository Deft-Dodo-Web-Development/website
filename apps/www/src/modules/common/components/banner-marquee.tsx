import { Marquee } from "./marquee";

const BannerMarquee = () => {
  return (
    <>
      <div className="py-24 bg-primary flex gap-14 overflow-hidden">
        <Marquee baseVelocity={-5}>Deft Dodo®</Marquee>
      </div>
    </>
  );
};

export default BannerMarquee;
