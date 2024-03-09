import { IconName } from "../components/icon";

export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function iconify(str: string): IconName {
  const clear = str.toLowerCase().replaceAll("-", " ");
  const transformed = titleCase(clear);
  return transformed.replaceAll(" ", "") as IconName;
}
