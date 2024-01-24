export enum EColor {
  GREEN = "green",
  BLUE = "blue",
  RED = "red",
}

export enum ESize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type TVariant = {
  id: string;
  title: string;
  image: { title: string; url: string };
  labels: { attribute_id: string; label_id: string }[];
  price: number;
};

export type TAttribute = {
  id: string;
  title: string;
  type: "COLOR" | "TEXT";
  labels: { id: string; title: string; data: string }[];
};

export type TProduct = {
  id: string;
  title: string;
  description: string;
  images: { title: string; url: string }[];
  discount_price: number;
  min_price: number;
  max_price: number;
  variants: TVariant[];
  attributes: TAttribute[];
};
