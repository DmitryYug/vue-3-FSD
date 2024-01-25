import type { TAttributeLabel, TProduct, TVariant } from "@/entities/product";

export const computeVariant = (payload: {
  product: TProduct | null;
  chosenAttributes: Record<string, TAttributeLabel> | null;
}): TVariant | null => {
  const { product, chosenAttributes } = payload;
  if (product && chosenAttributes) {
    let result: TVariant | null = null;
    const chosenCombination = Object.values(chosenAttributes)
      .map(label => label.id)
      .sort();
    product.variants.forEach(variant => {
      const currentCombination = variant.labels.map(label => label.label_id).sort();
      if (arraysAreEqual(chosenCombination, currentCombination)) {
        result = variant;
      }
    });
    return result ? result : ({ title: "Bad data from server, choose another options please" } as TVariant);
  } else {
    return null;
  }
};

const arraysAreEqual = (arr1: any[], arr2: any[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};
