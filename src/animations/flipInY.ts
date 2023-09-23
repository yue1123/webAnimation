export const flipInY = {
  keyframes: [
    {
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
      opacity: 0,
      backfaceVisibility: 'visible !important',
      easing: 'ease-in',
      offset: 0
    },
    {
      transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
      easing: 'ease-in',
      offset: 0.4
    },
    {
      transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
      opacity: 1,
      offset: 0.6
    },
    {
      transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
      offset: 0.8
    },
    {
      transform: 'perspective(400px)',
      opacity: 1,
      backfaceVisibility: 'visible !important',
      offset: 1
    }
  ],
  options: { duration: 1000, fill: 'both' }
}
