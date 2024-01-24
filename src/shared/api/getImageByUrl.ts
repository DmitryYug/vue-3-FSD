export const getImageByUrl = (url: string) => {
  return `https://fedtest.bylith.com/api/imager.php?url=${url}&type=fit&width=1000&height=1000&quality=70`;
};
