import { Blogs } from "@/modules/common/types/common";
import { ServerCollectionResponse } from "@/modules/common/types/server";

export type BlogsServerResponse = ServerCollectionResponse<Blogs[]>;
export type BlogServerResponse = ServerCollectionResponse<Blogs>;
