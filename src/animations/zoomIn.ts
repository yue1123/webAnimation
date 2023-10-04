export const zoomIn = /*#__PURE__*/ (() => {
  const frame = { transform: 'none', opacity: 1 }
  return {
    keyframes: [
      { transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, offset: 0 },
      { ...frame, offset: 0.5 },
      { ...frame, offset: 1 }
    ] as Keyframe[],
    options: { duration: 1000, fill: 'both' } as EffectTiming
  }
})()
