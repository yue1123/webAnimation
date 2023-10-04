export const fadeOutTopRight = {
  keyframes: [
    { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    { transform: 'translate3d(100%, -100%, 0)', opacity: 0 }
  ] as Keyframe[],
  options: { duration: 1000, fill: 'both' } as EffectTiming
}
