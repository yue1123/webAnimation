export const rotateOut =  /*#__PURE__*/ (() => {
	const transformOrigin = 'center'
	return {
		keyframes: [
			{ transform: 'none', opacity: 1, transformOrigin },
			{ transform: 'rotate3d(0, 0, 1, 200deg)', opacity: 0, transformOrigin }
		],
		options: { duration: 1000, fill: 'both' }
	}
})()
