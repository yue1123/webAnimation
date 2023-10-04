export function toElementArray<E extends Element = Element>(els: HTMLElement[] | NodeListOf<E>) {
  return (els as any).map ? (els as HTMLElement[]) : Array.from(els as NodeListOf<E>)
}
