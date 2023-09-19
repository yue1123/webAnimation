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
  els: HTMLElement[] | NodeListOf<E>,
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
  els: HTMLElement[] | NodeListOf<E>,
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

export function animate<E extends Element = Element>(
  this: any,
  el: Element | Element[] | NodeListOf<E> | string,
  keyframes: Keyframes,
  options: AnimateOptions | AnimateOptionsResolver
): Animation | Animation[] {
  return animateRunner.apply(this, [el, keyframes, options])
}
