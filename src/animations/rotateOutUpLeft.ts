export const rotateOutUpLeft = /*#__PURE__*/ (() => {
  const transformOrigin = 'left bottom'
  return {
    keyframes: [
      { transform: 'none', opacity: 1, transformOrigin },
      { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, transformOrigin }
    ],
    options: { duration: 1000, fill: 'both' }
  }
})()
