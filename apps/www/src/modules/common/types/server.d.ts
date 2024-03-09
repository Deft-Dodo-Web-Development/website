export interface ServerResponse<TServerAttributes> {
  data: ServerData<TServerAttributes>;
  meta: object;
}

export interface ServerData<TServerAttributes> {
  id: number;
  attributes: TServerAttributes;
}

export interface BaseServerAttributes {
  createAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}
