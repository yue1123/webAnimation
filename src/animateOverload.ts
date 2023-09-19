import { createOverload } from './utils'
import { type Keyframes, type AnimateOptions, type AnimateOptionsResolver } from './shared'

const { overloadFn: animateRunner, addOverload } = createOverload<any, Animation | Animation[]>()

function elementsWithSharedOptions(els: HTMLElement[], keyframes: Keyframes, optionsResolver: AnimateOptionsResolver) {
  return els.map((item, index) => item.animate(keyframes, optionsResolver(item, index)))
}

function elementsWithOptionsResolver(
  els: HTMLElement[],
  keyframes: Keyframes,
  optionsResolver: AnimateOptionsResolver
) {
  return els.map((item, index) => item.animate(keyframes, optionsResolver(item, index)))
}

function selectorWithSharedOptions(selector: string, keyframes: Keyframes, options: AnimateOptions) {
  const els = document.querySelectorAll(selector)
  return Array.from(els).map((item) => item.animate(keyframes, options))
}

function selectorWithSharedOptionsResolver(
  selector: string,
  keyframes: Keyframes,
  optionsResolver: AnimateOptionsResolver
) {
  const els = document.querySelectorAll(selector)
  return Array.from(els).map((item, index) => item.animate(keyframes, optionsResolver(item, index)))
}

function singleElAnimate(el: HTMLElement, Keyframes: Keyframes, options: AnimateOptions) {
  return el.animate(Keyframes, options)
}

// element array with a options resolver
addOverload(['array', 'nodelist'], ['array', 'object'], 'object', elementsWithSharedOptions)
// element array with a options resolver
addOverload(['array', 'nodelist'], ['array', 'object'], 'function', elementsWithOptionsResolver)
// css selector with a options resolver
addOverload('string', ['array', 'object'], 'function', selectorWithSharedOptionsResolver)
// css selector with a shared options
addOverload('string', ['array', 'object'], ['object', 'number'], selectorWithSharedOptions)
// single element animate call
addOverload(['htmlElement', 'nodelist'], ['array', 'object'], ['number', 'object'], singleElAnimate)

export { animateRunner }
