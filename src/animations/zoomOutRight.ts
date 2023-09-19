export const zoomOutRight = /*#__PURE__*/ (() => {
  const transformOrigin = 'right center'
  return {
		keyframes: [
			{ transform: 'none', opacity: 1, transformOrigin, offset: 0 },
			{
				transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
				opacity: 1,
				transformOrigin,
				offset: 0.4
			},
			{
				transform: 'scale(0.1) translate3d(2000px, 0, 0)',
				opacity: 0,
				transformOrigin,
				offset: 1
			}
		],
		options: { duration: 1000, fill: 'both' }
	}
})()
