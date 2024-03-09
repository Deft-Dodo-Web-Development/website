export interface Footer {
  id: number;
  deftdodo_banner: boolean;
}

export interface ProjectsAttributes {
  title: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image: MediaResponse;
}

export interface Projects {
  id: number;
  attributes: ProjectsAttributes;
}

export interface Services {}

interface MediaSize {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string;
  url: string;
}

export interface Media {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    url: string;
    formats: {
      thumbnail: MediaSize;
      small: MediaSize;
      medium: MediaSize;
      large: MediaSize;
    };
  };
}

export type MediaResponse = StrapiResponse<Media>;

export interface StrapiResponse<TData> {
  data: TData;
}

export interface ClientList {
  id: number;
  width: number;
  height: number;
  image: MediaResponse;
}
