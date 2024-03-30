import {
    BaseServerAttributes,
    ServerResponse,
} from "@/modules/common/types/server";

export type Info = {
    id: number;
    direction: string;
    phone: string;
    email: string;
}

export type Social = {
    id: number;
    text: string;
    url: string;
}

export type Copyright = {
    id: number;
    back_to_top: boolean;
    copyright: string;
}

export interface FooterAttributes extends BaseServerAttributes {
    info: Info,
    socials: Social[],
    copyright: Copyright
}

export type FooterServerResponse = ServerResponse<FooterAttributes>;