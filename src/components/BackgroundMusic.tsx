import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

interface BackgroundMusicProps {
  selectedProject: Project | null;
}

export function BackgroundMusic({ selectedProject }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!selectedProject?.bgmUrl) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      return;
    }

    const audio = new Audio(selectedProject.bgmUrl);
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.3;

    audio.play().catch(() => {
      // Autoplay may be blocked; user can interact to start
    });

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [selectedProject?.id, selectedProject?.bgmUrl]);

  return null;
}
