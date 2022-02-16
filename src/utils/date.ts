export const dateFormat = (x: string) =>
  new Date(x).getFullYear() +
  "." +
  new Date(x).getMonth().toString().padStart(2, "0") +
  "." +
  new Date(x).getDate().toString().padStart(2, "0");
