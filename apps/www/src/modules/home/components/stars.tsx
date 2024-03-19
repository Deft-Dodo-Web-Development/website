import { Star, StarHalf } from "lucide-react";

export type StarsProps = {
  stars: number;
};

const Stars: React.FC<StarsProps> = ({ stars }) => {
  return (
    <div className="flex items-center gap-[1px]">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < Math.floor(stars)) {
          return (
            <Star
              key={i}
              className="size-5 fill-yellow-500 stroke-yellow-300"
            />
          );
        } else if (i === Math.floor(stars) && stars % 1 !== 0) {
          return (
            <span className="flex gap-0">
              <StarHalf
                key={i}
                className="size-5 fill-yellow-500 stroke-yellow-300"
              />
              <StarHalf
                key={i}
                className="size-5 fill-gray-200/15 -ml-[20px] transform scale-x-[-1] stroke-yellow-300/10"
              />
            </span>
          );
        }
        return (
          <Star
            key={i}
            className="size-5 fill-gray-200/15 stroke-yellow-300/10"
          />
        );
      })}
    </div>
  );
};

export default Stars;
