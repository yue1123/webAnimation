export const zoomOut = {
  keyframes: [
    { transform: 'none', opacity: 1, offset: 0 },
    { transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, offset: 0.5 },
    { transform: 'none', opacity: 0, offset: 1 }
  ] as Keyframe[],
  options: { duration: 1000, fill: 'both' } as EffectTiming
}
