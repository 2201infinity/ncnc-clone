export const findTitle = (text: string) => {
  return text.charAt(0) === "[" || text.trim() === "";
};

export const findRemoveText = (text: string) => {
  return text.substring(1, 2) === "사";
};
