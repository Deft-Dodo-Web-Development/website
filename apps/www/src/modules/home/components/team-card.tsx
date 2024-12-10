import { AppConfig } from "@/config/app.config";
import { SocialPlatform, TeamMember } from "@/modules/common/types/common";
import { Avatar, AvatarImage } from "@components/avatar";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export type TeamCardProps = TeamMember;

const icons: {
  // eslint-disable-next-line no-unused-vars
  [key in SocialPlatform]: JSX.Element;
} = {
  github: <FiGithub className="w-6 h-6 fill-current" />,
  linkedin: <FiLinkedin className="w-6 h-6 fill-current" />,
  twitter: <FiTwitter className="w-6 h-6 fill-current" />,
  facebook: <FiFacebook className="w-6 h-6 fill-current" />,
};

const TeamCard: React.FC<TeamCardProps> = ({
  attributes: { name, picture, position, social },
}) => {
  return (
    <div className="flex flex-col text-center items-center bg-white-8 p-6 lg:p-8 transition-colors duration-300 transform border border-white-8 rounded-xl hover:border-transparent group hover:bg-primary/5 dark:border-gray-700 dark:hover:border-transparent">
      {picture?.data?.attributes && (
        <Avatar className="w-32 h-32">
          <AvatarImage
            src={`${AppConfig.strapi.url}${picture?.data?.attributes.url}`}
            alt={picture?.data?.attributes.alternativeText || name}
            className="object-cover"
          />
        </Avatar>
      )}
      {!!name && (
        <h3 className="mt-4 text-xl lg:text-2xl font-semibold capitalize dark:text-white group-hover:text-white">
          {name}
        </h3>
      )}
      {!!position && (
        <p className="mt-2 capitalize dark:text-gray-300 group-hover:text-gray-300">
          {position}
        </p>
      )}
      {!!social?.length && (
        <div className="flex mt-3 -mx-2">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="mx-2 text-primary dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Reddit"
              target="_blank"
              rel="noreferrer"
            >
              {icons[item.platform]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCard;
