const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const action = url.slice;
  const index = url.indexOf(target) + target.length;
  const newImageUrl = action(0, index) + "crop/600/400/" + action(index);
  return newImageUrl;
};

export default getCroppedImageUrl;
