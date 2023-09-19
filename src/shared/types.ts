export type AnyItemTypeWithLastLimitArray<Items, LastItem> = [...items: Items[], lastItem: LastItem]

export type Keyframes = Keyframe[] | PropertyIndexedKeyframes | null

export type AnimateOptions = number | KeyframeAnimationOptions

export type AnimateOptionsResolver = (el: Element, index: number) => AnimateOptions
