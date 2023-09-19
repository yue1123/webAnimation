export const slideOutLeft = {
  keyframes: [
    { transform: "translate3d(0, 0, 0)", visibility: "visible", offset: 0 },
    { transform: "translate3d(-100%, 0, 0)", visibility: "hidden", offset: 1 },
  ],
  options: { duration: 1000, fill: "both" },
}
