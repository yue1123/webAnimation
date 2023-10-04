import { createOverload, toElementArray } from './utils'
import { type Keyframes, type AnimateOptions, type AnimateOptionsResolver } from './shared'

const { overloadFn: animateRunner, addOverload } = createOverload<any, Animation | Animation[]>()

function elementsWithSharedOptions<E extends Element = Element>(
  els: HTMLElement[] | NodeListOf<E>,
  keyframes: Keyframes,
  options: AnimateOptions
) {
  return toElementArray(els).map((item) => item.animate(keyframes, options))
}

function elementsWithOptionsResolver<E extends Element = Element>(
  els: HTMLElement[] | NodeListOf<E>,
  keyframes: Keyframes,
  optionsResolver: AnimateOptionsResolver
) {
  return toElementArray(els).map((item, index) => item.animate(keyframes, optionsResolver(item, index)))
}

function selectorWithSharedOptions(selector: string, keyframes: Keyframes, options: AnimateOptions) {
  const els = document.querySelectorAll(selector)
  return Array.from(els).map((item) => item.animate(keyframes, options))
}

function selectorWithOptionsResolver(selector: string, keyframes: Keyframes, optionsResolver: AnimateOptionsResolver) {
  const els = document.querySelectorAll(selector)
  return Array.from(els).map((item, index) => item.animate(keyframes, optionsResolver(item, index)))
}

function singleElAnimate(el: HTMLElement, Keyframes: Keyframes, options: AnimateOptions) {
  return el.animate(Keyframes, options)
}

function elementsWithAnimateCss<E extends Element = Element>(
  els: HTMLElement[] | NodeListOf<E>,
  { keyframes, options }: { keyframes: Keyframes; options: AnimateOptions }
) {
  return toElementArray(els).map((item) => item.animate(keyframes, options))
}

function selectorWithAnimateCss(
  selector: string,
  { keyframes, options }: { keyframes: Keyframes; options: AnimateOptions }
) {
  const els = document.querySelectorAll(selector)
  return Array.from(els).map((item) => item.animate(keyframes, options))
}

// element array with a shared resolver
addOverload(['array', 'nodelist'], ['array', 'object'], 'object', elementsWithSharedOptions)

// element array with a options resolver
addOverload(['array', 'nodelist'], ['array', 'object'], 'function', elementsWithOptionsResolver)

// css selector with a shared options
addOverload('string', ['array', 'object'], ['object', 'number'], selectorWithSharedOptions)

// css selector with a options resolver
addOverload('string', ['array', 'object'], 'function', selectorWithOptionsResolver)

// single element animate call
addOverload('htmlElement', ['array', 'object'], ['number', 'object'], singleElAnimate)

// use animate css
addOverload(['htmlElement', 'nodelist'], 'object', elementsWithAnimateCss)
addOverload('string', 'object', selectorWithAnimateCss)

export { animateRunner }
