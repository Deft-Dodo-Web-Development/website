import { Avatar, AvatarImage } from "@components/avatar";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

type Platform = {
    icon: "github" | "linkedin" | "twitter" | "facebook";
    link: string;
};

export type TeamCardProps = {
    name: string;
    avatar: string;
    position: string;
    socialLinks: Platform[];
};

const icons = {
    github: (<Github className="w-6 h-6 fill-current" />),
    linkedin: (<Linkedin className="w-6 h-6 fill-current" />),
    twitter: (<Twitter className="w-6 h-6 fill-current" />),
    facebook: (<Facebook className="w-6 h-6 fill-current" />),
};

const TeamCard: React.FC<TeamCardProps> = ({ name, avatar, position, socialLinks }) => {
    return (
        <div className="flex flex-col items-center bg-white-8 p-6 lg:p-8 transition-colors duration-300 transform border border-white-8 rounded-xl hover:border-transparent group hover:bg-primary/5 dark:border-gray-700 dark:hover:border-transparent">
            <Avatar className="w-32 h-32">
                <AvatarImage src={avatar} alt={name} />
            </Avatar>
            <h3 className="mt-4 text-xl lg:text-2xl font-semibold capitalize dark:text-white group-hover:text-white">
                {name}
            </h3>
            <p className="mt-2 capitalize dark:text-gray-300 group-hover:text-gray-300">{position}</p>
            <div className="flex mt-3 -mx-2">
                {socialLinks.map((platform: Platform, index) => (
                    <a key={index} href={platform.link} className="mx-2 text-primary dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                        {icons[platform.icon]}
                    </a>
                ))}
            </div>
        </div>
    )
};

export default TeamCard;