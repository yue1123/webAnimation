export const bounceOut = /*#__PURE__*/ (() => {
  const frame = { transform: 'scale3d(1.1, 1.1, 1.1)', opacity: 1 }

  return {
    keyframes: [
      { transform: 'none', opacity: 1, offset: 0 },
      { transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.2 },
      { ...frame, offset: 0.5 },
      { ...frame, offset: 0.55 },
      { transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, offset: 1 }
    ],
    options: { duration: 750, fill: 'both' }
  }
})()
