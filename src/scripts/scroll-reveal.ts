import { animate, inView, stagger } from 'motion';

const revealEasing = [0.22, 1, 0.36, 1] as const;

const finishReveal = (elements: HTMLElement[]) => {
	elements.forEach((element) => {
		element.dataset.revealDone = 'true';
		element.style.willChange = 'auto';
	});
};

export const setupScrollReveals = () => {
	document.documentElement.dataset.motionInitialized = 'true';
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
	const revealGroups = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-group]'));

	if (reducedMotion) {
		document.documentElement.classList.remove('motion-ready');
		finishReveal([
			...revealElements,
			...revealGroups.flatMap((group) => Array.from(group.querySelectorAll<HTMLElement>('[data-reveal-item]')))
		]);
		return () => {};
	}

	document.documentElement.classList.add('motion-ready');
	const stopObservers: Array<() => void> = [];

	revealElements.forEach((element) => {
		const stop = inView(element, () => {
			if (element.dataset.revealDone === 'true') return;
			element.dataset.revealDone = 'true';
			const delay = Number(element.dataset.revealDelay || 0) / 1000;
			const animation = animate(
				element,
				{ opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
				{ duration: 0.72, delay, ease: revealEasing }
			);
			animation.then(() => finishReveal([element]));
		}, { amount: 0.15, margin: '0px 0px -8% 0px' });
		stopObservers.push(stop);
	});

	revealGroups.forEach((group) => {
		const items = Array.from(group.querySelectorAll<HTMLElement>('[data-reveal-item]'));
		if (!items.length) return;

		const stop = inView(group, () => {
			if (group.dataset.revealDone === 'true') return;
			group.dataset.revealDone = 'true';
			items.forEach((item) => { item.dataset.revealDone = 'true'; });
			const animation = animate(
				items,
				{ opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
				{ duration: 0.62, delay: stagger(0.075), ease: revealEasing }
			);
			animation.then(() => finishReveal(items));
		}, { amount: 0.12, margin: '0px 0px -7% 0px' });
		stopObservers.push(stop);
	});

	return () => stopObservers.forEach((stop) => stop());
};
