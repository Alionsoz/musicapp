// src/store/musicStore.js
import { create } from "zustand";

const MOCK_TRACK = {
  id: "1",
  title: "Blinding Lights",
  artist: "The Weeknd",
  cover:
    "https://i.scdn.co/image/ab67616d0000b273c5dcb19b8bc447ddb5e5c4a7",
  duration: 198, // seconds
};

export const useMusicStore = create((set, get) => ({
  // currently selected track
  currentTrack: MOCK_TRACK,

  // playback state
  isPlaying: true,
  position: 36, // seconds

  // actions
  playTrack: (track) =>
    set({
      currentTrack: track || MOCK_TRACK,
      isPlaying: true,
      position: 0,
    }),

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  setPosition: (pos) => {
    const duration = get().currentTrack?.duration || 0;
    const safePos = Math.max(0, Math.min(pos, duration));
    set({ position: safePos });
  },
}));
