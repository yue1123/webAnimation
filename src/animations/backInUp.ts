export const backInUp = {
  keyframes: [
    { transform: 'translateY(1200px) scale(0.7)', opacity: 0.7, offset: 0 },
    { transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.8 },
    { transform: 'scale(1)', opacity: 1, offset: 1 }
  ] as Keyframe[],
  options: { duration: 1000, fill: 'both' } as EffectTiming
}
