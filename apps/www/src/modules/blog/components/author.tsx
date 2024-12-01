import { TeamMember, StrapiResponse, SocialPlatform } from "@/modules/common/types/common";
import { Avatar, AvatarImage } from "@components/avatar";
import { AppConfig } from "@/config/app.config";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export type AuthorProps = StrapiResponse<TeamMember>;

const icons: {
    // eslint-disable-next-line no-unused-vars
    [key in SocialPlatform]: JSX.Element;
} = {
    github: <FiGithub className="w-6 h-6 fill-current" />,
    linkedin: <FiLinkedin className="w-6 h-6 fill-current" />,
    twitter: <FiTwitter className="w-6 h-6 fill-current" />,
    facebook: <FiFacebook className="w-6 h-6 fill-current" />,
};

const Author: React.FC<AuthorProps> = (author) => {
    return (
        <div>
            <div className="flex items-center justify-start gap-4 mb-4">
                {author.data?.attributes.picture?.data?.attributes ? (
                    <Avatar className="w-14 h-14">
                        <AvatarImage
                            src={`${AppConfig.strapi.url}${author.data?.attributes.picture.data?.attributes?.url}`}
                            alt={
                                author.data?.attributes.picture.data.attributes.alternativeText ||
                                author.data?.attributes.name
                            }
                            className="object-cover"
                        />
                    </Avatar>
                ) : null}

                {author.data?.attributes.name || author.data?.attributes.position ? (
                    <div>
                        <span className="text-slate-200 text-sm font-medium">
                            {author.data?.attributes.name}
                        </span>
                        <span className="text-slate-200 block text-xs">
                            {author.data?.attributes.position}
                        </span>
                    </div>
                ) : null}
            </div>
            {!!author.data?.attributes.social?.length && (
                <div className="flex -mx-2">
                    {author.data?.attributes.social.map((item, index) => (
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
    )
};

export default Author;