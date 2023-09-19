export function getValueType(value: any): string {
	return value instanceof HTMLElement
		? 'htmlElement'
		: Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase()
}
