export const rotateInUpRight = /*#__PURE__*/ (() => {
  const transformOrigin = 'right bottom'
  return {
    keyframes: [
      { transform: 'rotate3d(0, 0, 1, -90deg)', opacity: 0, transformOrigin },
      { transform: 'translate3d(0, 0, 0)', opacity: 1, transformOrigin }
    ] as Keyframe[],
    options: { duration: 1000, fill: 'both' } as EffectTiming
  }
})()
