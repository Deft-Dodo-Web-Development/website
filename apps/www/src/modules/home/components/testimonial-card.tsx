import { Separator } from "@components/separator";
import { Avatar, AvatarImage } from "@components/avatar";
import { AspectRatio } from "@components/aspect-ratio";
import { Quote } from "lucide-react";
import Image from "next/image";

export type TestimonialCardProps = {
    quote: string;
    paragraph: string;
    avatar: string;
    name: string;
    designation: string;
    companyImage: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, paragraph, avatar, name, designation, companyImage }) => {
    return (
        <div className="relative pt-12">
            <Quote className="absolute w-24 h-24 top-0 right-0 fill-primary stroke-white pr-6" />
            <div className="flex flex-col flex-wrap items-center py-12 px-6 md:px-8 bg-white-8">
                {quote || paragraph ? (
                    <p className="font-medium text-sm md:text-base">
                        {quote ? (
                            <q className="text-3xl font-bold mb-4 block">{quote}</q>
                        ) : null}

                        {paragraph}
                    </p>
                ) : null}
                <Separator className="my-8" />
                <div className="flex flex-wrap items-center content-center justify-between w-full">
                    <div className="flex items-center justify-center gap-4">
                        {avatar ? (
                            <Avatar className="w-14 h-14">
                                <AvatarImage src={avatar} alt={name} />
                            </Avatar>
                        ) : null}

                        {name || designation ? (
                            <div>
                                <span className="text-slate-200 text-sm font-medium">{name}</span>
                                <span className="text-slate-200 block text-xs">
                                    {designation}
                                </span>
                            </div>
                        ) : null}
                    </div>
                    {companyImage ? (
                        <div className="flex items-center justify-center w-36 mt-6 md:mt-0">
                            <AspectRatio ratio={35 / 8}>
                                <Image width={140} height={32} src={companyImage} alt={name} className="object-contain" />
                            </AspectRatio>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;