export const pulse = {
  keyframes: [
    { transform: 'scale3d(1, 1, 1)', offset: 0 },
    { transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 },
    { transform: 'scale3d(1, 1, 1)', offset: 1 }
  ],
  options: { duration: 1000, fill: 'both', easing: 'ease-in-out' }
}
