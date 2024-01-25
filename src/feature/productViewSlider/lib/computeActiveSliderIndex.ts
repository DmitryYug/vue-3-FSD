import { EAttributeType, type TAttribute, type TAttributeLabel, type TProduct } from "@/entities/product";
import { getColorFromImageTitle } from "@/shared/lib";

type TArgs = {
  product: TProduct | null;
  chosenLabel: TAttributeLabel | null;
  chosenAttribute: TAttribute | null;
};

export const computeActiveSliderIndex = ({ product, chosenLabel, chosenAttribute }: TArgs) => {
  if (product && chosenAttribute && product.images && chosenLabel && chosenAttribute.type === EAttributeType.COLOR) {
    return product.images.findIndex(img => {
      const labelTitle = chosenLabel.title.replace(/[^a-zA-Z]/g, "").toLowerCase();
      const colorAttributeTitle = getColorFromImageTitle(img.title)
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase();
      console.log(labelTitle, colorAttributeTitle);
      return labelTitle.includes(colorAttributeTitle) || colorAttributeTitle.includes(labelTitle);
    });
  }
  return 0;
};
