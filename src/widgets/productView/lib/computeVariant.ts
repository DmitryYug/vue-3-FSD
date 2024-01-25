import type { TProduct, TVariant } from "@/entities/product";

export const computeVariant = (payload: {
  product: TProduct | null;
  chosenAttributes: Record<string, string> | null;
}): TVariant | null => {
  const { product, chosenAttributes } = payload;
  if (product && chosenAttributes) {
    let result: TVariant | null = null;
    const chosenCombination = Object.values(chosenAttributes).sort();
    console.log({ chosenCombination });
    product.variants.forEach(variant => {
      const currentCombination = variant.labels.map(label => label.label_id).sort();
      console.log({ currentCombination });
      if (arraysAreEqual(chosenCombination, currentCombination)) {
        result = variant;
      }
    });
    console.log({ result });
    return result;
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
