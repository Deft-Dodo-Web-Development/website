import { Services } from "@/modules/common/types/common";
import { ServerCollectionResponse } from "@/modules/common/types/server";

export type ServicesServerResponse = ServerCollectionResponse<Services[]>;
export type ServiceServerResponse = ServerCollectionResponse<Services>;
