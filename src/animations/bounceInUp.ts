export const bounceInUp =  /*#__PURE__*/ (() => {
	const easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)'
  
	return {
		keyframes: [
			{
				transform: 'translate3d(0, 3000px, 0) scaleY(5)',
				opacity: 0,
				easing,
				offset: 0
			},
			{
				transform: 'translate3d(0, -20px, 0) scaleY(0.9)',
				opacity: 1,
				easing,
				offset: 0.6
			},
			{
				transform: 'translate3d(0, 10px, 0) scaleY(0.95)',
				easing,
				offset: 0.75
			},
			{ transform: 'translate3d(0, -5px, 0) scaleY(0.985)', easing, offset: 0.9 },
			{
				transform: 'translate3d(0, 0, 0)',
				opacity: 1,
				easing,
				offset: 1
			}
		],
		options: { duration: 1000, fill: 'both' }
	}
})()
