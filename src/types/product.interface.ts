export interface IProduct {
  id: number;
  name: string;
  type: string;
  releaseDate: string;
  insertDate: string;
  views: number;
  abbreviation: string;
  durationInSec?: number;
  category: {
    id: number;
    name: string;
    hasLength?: boolean;
  };
}
