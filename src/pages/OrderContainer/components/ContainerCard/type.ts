export interface Container {
  id: number;
  size: number;
  dimensions: { height: number; width: number; length: number };
  weight: string;
  image: string;
}
