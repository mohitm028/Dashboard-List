export const limitNameWithLength = (word:string, length: number) => {
  if (!word) return "";
  if (word && word.length <= length) return word;

  const displayWord = word.substring(0, length);
  return displayWord + "...";
};