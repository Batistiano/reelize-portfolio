"use client";

import { useState } from "react";
import { getReelEmbedUrl } from "@/lib/instagram";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

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
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/50">
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
