export type TVariantLabel = { attribute_id: string; label_id: string };

export enum EAttributeType {
  COLOR = "COLOR",
  TEXT = "TEXT",
}

export type TVariant = {
  id: string;
  title: string;
  image: { title: string; url: string };
  labels: TVariantLabel[];
  price: number;
};

export type TAttributeLabel = {
  id: string;
  title: string;
  data: string;
};

export type TAttribute = {
  id: string;
  title: string;
  type: string;
  labels: TAttributeLabel[];
};

export type TProduct = {
  id: string;
  title: string;
  description: string;
  images: { title: string; url: string }[];
  discount_price: number;
  direct_sale: { is_direct: boolean; type: string };
  min_price: number;
  max_price: number;
  variants: TVariant[];
  attributes: TAttribute[];
};
