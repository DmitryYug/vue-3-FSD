export const getColorFromImageTitle = (title: string) => {
  const dotIndex = title.lastIndexOf(".");
  return dotIndex !== -1 ? title.substring(0, dotIndex) : title;
};
