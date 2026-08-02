export function extractReelId(url: string): string {
  const match = url.match(/instagram\.com\/reel\/([A-Za-z0-9_-]+)/);
  if (!match) {
    throw new Error(`Invalid Instagram reel URL: ${url}`);
  }
  return match[1];
}

export function getReelEmbedUrl(url: string): string {
  const id = extractReelId(url);
  return `https://www.instagram.com/reel/${id}/embed/?muted=1`;
}
