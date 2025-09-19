import '@testing-library/jest-dom';

// Polyfill IntersectionObserver for framer-motion viewport features in tests
class MockIntersectionObserver implements IntersectionObserver {
	readonly root: Element | null = null;
	readonly rootMargin: string = '0px';
	readonly thresholds: ReadonlyArray<number> = [0];
	constructor(private callback: IntersectionObserverCallback) {}
	disconnect(): void {}
	observe(target: Element): void {
		// Immediately invoke callback as if element is in view
		this.callback([
			{
				isIntersecting: true,
				intersectionRatio: 1,
				boundingClientRect: target.getBoundingClientRect(),
				intersectionRect: target.getBoundingClientRect(),
				rootBounds: target.getBoundingClientRect(),
				target: target,
				time: Date.now(),
			} as IntersectionObserverEntry,
		], this);
	}
	takeRecords(): IntersectionObserverEntry[] { return []; }
	unobserve(_target: Element): void { void _target; }
}

if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
	// @ts-expect-error assigning test polyfill
	window.IntersectionObserver = MockIntersectionObserver;
}

// Polyfill matchMedia for theme detection in tests
const win = globalThis as unknown as Window & typeof globalThis;
if (typeof win !== 'undefined' && typeof win.matchMedia !== 'function') {
	win.matchMedia = (query: string) => {
		const mql: MediaQueryList = {
			matches: false,
			media: query,
			onchange: null,
			// Legacy API
			addListener: (_listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => {},
			removeListener: (_listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => {},
			// Modern EventTarget API
			addEventListener: (_type: string, _listener: EventListenerOrEventListenerObject) => {},
			removeEventListener: (_type: string, _listener: EventListenerOrEventListenerObject) => {},
			dispatchEvent: (_event: Event) => false,
		} as unknown as MediaQueryList;
		return mql;
	};
}
