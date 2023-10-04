export const fadeInDownBig = {
  keyframes: [
    { transform: 'translate3d(0, -2000px, 0)', opacity: 0 },
    { transform: 'translate3d(0, 0, 0)', opacity: 1 }
  ] as Keyframe[],
  options: { duration: 1000, fill: 'both' } as EffectTiming
}
