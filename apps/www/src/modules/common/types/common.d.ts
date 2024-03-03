export interface Footer {
  id: number;
  deftdodo_banner: boolean;
}

export interface Projects {}
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
    formats: {
      thumbnail: MediaSize;
      small: MediaSize;
      medium: MediaSize;
      large: MediaSize;
    };
  };
}

export interface MediaResponse {
  data: Media;
}
