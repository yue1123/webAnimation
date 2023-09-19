import { animate, tada, easeInOutQuint } from './dist/index.js'

animate('.title-el', tada.keyframes, 1000)
document.getElementById('animate-el').onclick = function () {
  const newspaperSpinning = [{ transform: 'rotate(0) scale(1)' }, { transform: 'rotate(360deg) scale(0)' }]

  /**
   * @type {KeyframeAnimationOptions}
   */
  const newspaperTiming = {
    duration: 2000,
    iterations: Infinity,
    direction: 'alternate-reverse',
    easing: easeInOutQuint
  }
  animate(this, newspaperSpinning, newspaperTiming)
}
