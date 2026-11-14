import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteImages } from '@/data/site';

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = '/videos/jewelry_hero_15s.mp4';
const VIDEO_MAX_DURATION = 15;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let scrubTween: gsap.core.Tween | null = null;

    const seekToProgress = () => {
      if (scrubTween && video.duration > 0 && !Number.isNaN(video.duration)) {
        video.currentTime = Math.min(video.duration, VIDEO_MAX_DURATION) * scrubTween.progress();
      }
    };

    const buildScrub = () => {
      scrubTween = gsap.to(
        { progress: 0 },
        {
          progress: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            // Pin for ~12000px on desktop so the 15s video scrubs very slowly.
            end: () => `+=${window.innerWidth >= 768 ? 12000 : 4000}`,
            pin: true,
            pinSpacing: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: seekToProgress,
          },
        }
      );
      seekToProgress();
    };

    const onLoadedMetadata = () => {
      setVideoReady(true);
      // Freeze on the first frame until the user scrolls; scrubbing maps
      // scroll progress onto the first 15 seconds only.
      video.currentTime = 0;
      buildScrub();
      ScrollTrigger.refresh();
    };

    const onError = () => setVideoFailed(true);

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('error', onError);
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('error', onError);
      scrubTween?.scrollTrigger?.kill();
      scrubTween?.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-charcoal-900"
    >
      {/* Cinematic frame — scroll-scrubbed video, clean, no text overlays */}
      <div className="absolute inset-0">
        <img
          src={siteImages.hero}
          alt="A woman wearing diamond bridal jewelry"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            videoReady && !videoFailed ? 'opacity-0' : 'opacity-90'
          }`}
        />
        {!videoFailed && (
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-label="Cinematic jewelry film, controlled by scrolling"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        {videoFailed && (
          <p className="absolute inset-x-0 bottom-24 z-20 text-center text-sm text-ivory-100/70">
            The cinematic film could not be loaded.
          </p>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-charcoal-900/10 to-charcoal-900/70" />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="scroll-line block h-14 w-px bg-ivory-100/70" aria-hidden="true" />
      </div>
    </section>
  );
}
