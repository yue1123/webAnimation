export function combineNestedArray(arr: string[][]): string[] {
  const result: string[] = ['']

  for (const item of arr) {
    if (Array.isArray(item)) {
      const temp: string[] = []
      for (const str of result) {
        temp.push(...item.map((option) => str + option))
      }
      result.length = 0
      result.push(...temp)
    } else {
      result.forEach((str, index) => (result[index] = str + item))
    }
  }

  return result
}
