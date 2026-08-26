import { useEffect, useRef, useState } from "react";

type PreviewProps = { src: string; accessibleName: string; fallback: string };

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function OrbitGlidePreview({ src, accessibleName, fallback }: PreviewProps) {
  const frameRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [eligible, setEligible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && document.visibilityState === "visible") {
        setEligible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (frameRef.current) observer.observe(frameRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopForReducedMotion = () => {
      if (mediaQuery.matches) {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.loop = false;
        setPlaying(false);
      }
    };
    mediaQuery.addEventListener("change", stopForReducedMotion);
    return () => mediaQuery.removeEventListener("change", stopForReducedMotion);
  }, []);

  const attemptPlayback = async () => {
    const video = videoRef.current;
    if (!video || failed || prefersReducedMotion() || document.visibilityState !== "visible") return;
    try {
      await video.play();
      video.loop = true;
      setPlaying(true);
    } catch {
      video.pause();
      video.loop = false;
      setPlaying(false);
    }
  };

  const fail = () => {
    const video = videoRef.current;
    video?.pause();
    if (video) {
      video.loop = false;
      video.removeAttribute("src");
      video.load();
    }
    setPlaying(false);
    setFailed(true);
  };

  return (
    <figure ref={frameRef} className="media-frame orbit-preview" aria-label={accessibleName}>
      {eligible && !failed && (
        <video
          ref={videoRef}
          className={playing ? "orbit-video is-playing" : "orbit-video"}
          src={src}
          muted
          playsInline
          preload="metadata"
          aria-label={accessibleName}
          tabIndex={-1}
          onCanPlay={attemptPlayback}
          onError={fail}
        />
      )}
      {!playing && (
        <div className="media-fallback">
          <span>Orbit Glide</span>
          <strong>Gameplay demonstration</strong>
          <small>{fallback}</small>
        </div>
      )}
      <figcaption className="sr-only">{fallback}</figcaption>
    </figure>
  );
}
