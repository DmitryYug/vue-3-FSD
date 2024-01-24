import type { TAttributeLabel, TProduct, TVariantLabel } from "@/entities/product";

export const computeAvailableVariants = (product: TProduct | null, chosenLabel: TAttributeLabel | null) => {
  const res: Record<string, string[]> = {};
  if (product && chosenLabel) {
    const { variants } = product;
    const allLabels: TVariantLabel[] = [];
    variants
      .filter(el => {
        return el.labels.find(label => {
          return label.label_id === chosenLabel.id;
        });
      })
      .forEach(variant => {
        variant.labels.forEach(label => {
          allLabels.push(label);
        });
      });
    allLabels.forEach(({ attribute_id, label_id }) => {
      if (!res[attribute_id]) {
        res[attribute_id] = [];
      }

      if (!res[attribute_id].includes(label_id)) {
        res[attribute_id].push(label_id);
      }
    });
  }
  console.log({ res });
  return res;
};
