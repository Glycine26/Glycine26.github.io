import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

type PreviewProps = {
  src: string;
  accessibleName: string;
  fallback: string;
};

export default function OrbitGlidePreview({ src, accessibleName, fallback }: PreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setHasFailed(false);
  }, [src]);

  useEffect(() => {
    if (hasFailed) return;

    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const handlePlayState = () => {
      setIsPlaying(true);
    };

    const handlePauseState = () => {
      setIsPlaying(false);
    };

    const handleVolumeState = () => {
      setIsMuted(video.muted);
    };

    video.addEventListener("play", handlePlayState);
    video.addEventListener("playing", handlePlayState);
    video.addEventListener("pause", handlePauseState);
    video.addEventListener("volumechange", handleVolumeState);

    const tryAutoPlay = () => {
      video.play().catch(() => {
        // Autoplay policy may require user interaction
      });
    };

    tryAutoPlay();
    video.addEventListener("loadedmetadata", tryAutoPlay);
    video.addEventListener("canplay", tryAutoPlay);

    // Auto-play when scrolled into view
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tryAutoPlay();
          }
        },
        { threshold: 0.25 }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      video.removeEventListener("play", handlePlayState);
      video.removeEventListener("playing", handlePlayState);
      video.removeEventListener("pause", handlePauseState);
      video.removeEventListener("volumechange", handleVolumeState);
      video.removeEventListener("loadedmetadata", tryAutoPlay);
      video.removeEventListener("canplay", tryAutoPlay);
      if (observer) observer.disconnect();
    };
  }, [hasFailed, src]);

  const handleVideoError = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    const errorCode = video.error?.code ?? "unknown";

    console.error(
      `Orbit Glide preview failed to load from "${src}" (HTMLMediaElement error code: ${errorCode}).`
    );

    video.pause();
    video.loop = false;
    setIsPlaying(false);
    setHasFailed(true);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Could not play video:", err);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[320px] sm:max-w-[350px] mx-auto group">
      {/* Subtle colorful ambient halo behind phone mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

      {/* Smartphone Device Frame Mockup */}
      <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-black border-4 border-slate-700/80 shadow-2xl overflow-hidden ring-1 ring-white/10">
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 w-24 h-4 bg-black rounded-full flex items-center justify-center gap-2 pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-2.5 h-1 rounded-full bg-slate-700/80" />
        </div>

        {/* Video Canvas Container */}
        <div
          onClick={() => togglePlay()}
          className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer select-none"
        >
          {hasFailed ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white"
              role="status"
              aria-live="polite"
            >
              <p className="text-sm font-semibold">Gameplay preview unavailable</p>
              <p className="text-xs leading-relaxed text-slate-300">{fallback}</p>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                src={src}
                poster="/media/orbit-glide-poster.jpg"
                aria-label={accessibleName}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onError={handleVideoError}
                className="w-full h-full object-cover"
              >
                <source src={src} type="video/mp4" />
                <p className="text-white text-xs p-4">{fallback}</p>
              </video>

              {/* Large Center Play Button Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
                  <div className="w-16 h-16 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-transform">
                    <Play size={28} className="ml-1 text-slate-900 fill-slate-900" />
                  </div>
                </div>
              )}

              {/* Top Live Badge */}
              <div className="absolute top-7 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white/90 pointer-events-none">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-ping" : "bg-amber-400"}`} />
                <span>{isPlaying ? "Gameplay Active" : "Click to Play"}</span>
              </div>

              {/* Interactive Floating Video Controls */}
              <div className="absolute bottom-4 left-0 right-0 z-20 px-4 flex items-center justify-between pointer-events-auto">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="p-2.5 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 shadow-lg transition-transform active:scale-95"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>

                {/* Mute/Unmute Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 shadow-lg transition-transform active:scale-95 text-xs font-semibold"
                >
                  {isMuted ? (
                    <>
                      <VolumeX size={16} className="text-amber-300" />
                      <span>Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 size={16} className="text-emerald-400" />
                      <span>Audio On</span>
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Home bar indicator */}
        <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-2 pointer-events-none" />
      </div>
    </div>
  );
}
