type Urls = {
  raw: string;
  regular: string;
  full: string;
  small: string;
  thumb: string;
  small_s3: string;
}
// [key: string]: string;

export interface ImageType {
  alt_description: string;
  description: string;
  urls: Urls
  id: string;
}