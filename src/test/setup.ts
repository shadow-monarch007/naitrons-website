import '@testing-library/jest-dom';

// Polyfill IntersectionObserver for framer-motion viewport features in tests
class MockIntersectionObserver implements IntersectionObserver {
	readonly root: Element | null = null;
	readonly rootMargin: string = '0px';
	readonly thresholds: ReadonlyArray<number> = [0];
	constructor(private callback: IntersectionObserverCallback) {}
	disconnect(): void {}
	observe(_target: Element): void {
		// Immediately invoke callback as if element is in view
		this.callback([
			{
				isIntersecting: true,
				intersectionRatio: 1,
				boundingClientRect: _target.getBoundingClientRect(),
				intersectionRect: _target.getBoundingClientRect(),
				rootBounds: _target.getBoundingClientRect(),
				target: _target,
				time: Date.now(),
			} as IntersectionObserverEntry,
		], this);
	}
	takeRecords(): IntersectionObserverEntry[] { return []; }
	unobserve(_target: Element): void {}
}

if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
	// @ts-expect-error assigning test polyfill
	window.IntersectionObserver = MockIntersectionObserver;
}
