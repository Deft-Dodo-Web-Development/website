import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export type ProfileProps = {
  name: string;
  position: string;
  description: string;
  picture: string | StaticImageData;
  reverse?: boolean;
};

const Profile: React.FC<ProfileProps> = ({
  description,
  name,
  picture,
  position,
  reverse,
}) => {
  return (
    <section className={cn("grid grid-cols-1 gap-10 lg:grid-cols-2")}>
      <div className={cn("space-y-8", reverse ? "lg:order-2" : "lg:order-1")}>
        <div className="space-y-2">
          <h3 className="text-2xl">{name}</h3>
          <div className="px-2 py-2 bg-white-8 w-fit rounded-lg">
            <span>{position}</span>
          </div>
        </div>
        <div
          className="space-y-8 text-[16px]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
      <div className={cn(reverse ? "lg:order-1" : "lg:order-2")}>
        <Image
          src={picture}
          alt={name}
          width={640}
          height={500}
          className="w-[640px] h-[500px] object-cover rounded-lg max-lg:mx-auto"
        />
      </div>
    </section>
  );
};

export default Profile;
