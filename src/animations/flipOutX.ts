export const flipOutX = {
  keyframes: [
    {
      transform: 'perspective(400px)',
      opacity: 1,
      backfaceVisibility: 'visible !important',
      offset: 0
    },
    {
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
      opacity: 1,
      offset: 0.3
    },
    {
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      opacity: 0,
      backfaceVisibility: 'visible !important',
      offset: 1
    }
  ] as Keyframe[],
  options: { duration: 750, fill: 'both' } as EffectTiming
}
