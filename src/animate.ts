import { animateRunner } from './animateOverload'
import { type Keyframes, type AnimateOptions, type AnimateOptionsResolver } from './shared'

/**
 * Single element with animate options
 * @param el element
 * @param keyframes keyframes
 * @param options animation options
 */
export function animate(el: Element, keyframes: Keyframes, options: AnimateOptions): Animation
/**
 * Elements array with a options resolver
 * @param els element array
 * @param keyframes keyframes
 * @param optionsResolver A function return animation config
 */
export function animate<E extends Element = Element>(
  el: E[] | NodeListOf<E>,
  keyframes: Keyframes,
  optionsResolver: AnimateOptionsResolver
): Animation[]
/**
 * Multiple elements share an animation options
 * @param els element array
 * @param keyframes keyframes
 * @param options animation options
 */
export function animate<E extends Element = Element>(
  els: E[] | NodeListOf<E>,
  keyframes: Keyframes,
  options: AnimateOptions
): Animation[]
/**
 * A css selector matched element(s) with a options resolver
 * @param selector css selector
 * @param keyframes keyframes
 * @param optionsResolver A function return animation config
 */
export function animate(selector: string, keyframes: Keyframes, optionsResolver: AnimateOptionsResolver): Animation[]
/**
 * A css selector matched element(s) share an animation options
 * @param selector
 * @param keyframes
 * @param options
 */
export function animate(selector: string, keyframes: Keyframes, options: AnimateOptions): Animation[]
/**
 * animate css preset
 * @param selector
 * @param keyframes
 * @param options
 */
export function animate<E extends Element = Element>(
  els: E | E[] | NodeListOf<E> | string,
  animation: { keyframes: Keyframes; options: AnimateOptions }
): Animation | Animation[] | void

export function animate(this: any, ...args: any[]): Animation | Animation[] | void {
  if (!Element.prototype.animate) {
    return console.warn(
      'Your browser does not seem to support the Web Animations API. Please add polyfill: `import web-animate.js/polyfill` to your project and try again!'
    )
  }

  return animateRunner.apply(this, args)
}
