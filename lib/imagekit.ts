const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? "";

export function imageKitUrl(path: string, transformations?: string) {
  if (!endpoint) return "";
  const base = endpoint.replace(/\/+$/, "");
  const cleanPath = path.replace(/^\/+/, "");
  const query = transformations ? "?tr=" + transformations : "";
  return base + "/" + cleanPath + query;
}
