export const lightSpeedOutRight = {
  keyframes: [
    { transform: 'none', opacity: 1 },
    { transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: 0 }
  ] as Keyframe[],
  options: { duration: 1000, fill: 'both', easing: 'ease-in' } as EffectTiming
}
