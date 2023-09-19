import { type AnyItemTypeWithLastLimitArray } from '../shared'
import { getValueType } from './getValueType'
import { combineNestedArray } from './combineNestedArray'

type ImplementFn<T, R> = (...args: T[]) => R

export function createOverload<T = any, R = any>() {
  const implementFnMap = new Map<string, ImplementFn<T, R>>()
  function overloadFn(...args: T[]) {
    const implementFnKey = args.map((arg) => getValueType(arg)).join('')
    const implementFn = implementFnMap.get(implementFnKey)
    if (implementFn) {
      return implementFn.apply(null, args)
    }

    throw new Error('[ createOverload ] - no matched implement function, please check arguments')
  }

  function addOverload(...args: AnyItemTypeWithLastLimitArray<string | string[], ImplementFn<T, R>>) {
    const implementFn = args.pop()

    if (!(implementFn instanceof Function)) {
      throw new Error('[ createOverload ] - implement function must be function type')
    }
    for (const key of combineNestedArray(args as string[][])) {
      implementFnMap.set(key, implementFn)
    }
  }
  return { overloadFn, addOverload }
}
