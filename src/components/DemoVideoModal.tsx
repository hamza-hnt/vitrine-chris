import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ExternalLink, X } from "lucide-react";
import { DEMO_VIDEO_EMBED_URL, DEMO_VIDEO_URL } from "../lib/constants";
import { DemoVideoContext } from "./DemoVideoContext";

export function DemoVideoProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openDemoVideo = useCallback(() => setOpen(true), []);
  const closeDemoVideo = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDemoVideo();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeDemoVideo, open]);

  const value = useMemo(() => ({ openDemoVideo }), [openDemoVideo]);

  return (
    <DemoVideoContext.Provider value={value}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6">
          <button
            type="button"
            aria-label="Close demo video"
            className="absolute inset-0 bg-ink-950/85 backdrop-blur-md"
            onClick={closeDemoVideo}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-video-title"
            className="relative w-full max-w-5xl overflow-hidden rounded-[24px] border border-white/15 bg-ink-900 shadow-[0_28px_90px_-32px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.22em] text-azure-300">
                  Chris.AI demo
                </p>
                <h2
                  id="demo-video-title"
                  className="mt-1 truncate text-sm font-medium tracking-tight text-ink-50 sm:text-base"
                >
                  Tenant message to resolved workflow
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={DEMO_VIDEO_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-ink-200 transition-colors hover:border-white/20 hover:bg-white/5 sm:inline-flex"
                >
                  YouTube
                  <ExternalLink size={12} />
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close demo video"
                  onClick={closeDemoVideo}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-200 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="bg-black">
              <iframe
                className="block aspect-video w-full"
                src={DEMO_VIDEO_EMBED_URL}
                title="Chris.AI demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </DemoVideoContext.Provider>
  );
}
