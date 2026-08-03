"use client";

import { useState } from "react";
import { getReelEmbedUrl } from "@/lib/instagram";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

interface InstagramEmbedProps {
  url: string;
  title?: string;
}

export function InstagramEmbed({ url, title }: InstagramEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const embedUrl = getReelEmbedUrl(url);

  if (failed) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-full h-full bg-bg-primary/50 gap-3 p-4 text-center"
      >
        <InstagramIcon className="w-10 h-10 text-accent-primary" />
        <p className="text-sm text-text-muted">Ver en Instagram</p>
      </a>
    );
  }

  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundColor: "#000",
        filter: "invert(0.92) hue-rotate(180deg)",
      }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/50 z-10">
          <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <iframe
        src={embedUrl}
        title={title || "Instagram reel"}
        className="w-full h-full"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allow="encrypted-media"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
