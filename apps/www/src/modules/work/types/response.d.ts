import { Projects } from "@/modules/common/types/common";
import { ServerCollectionResponse } from "@/modules/common/types/server";

export type ProjectsServerResponse = ServerCollectionResponse<Projects[]>;
export type ProjectServerResponse = ServerCollectionResponse<Projects>;
