export type PortfolioLanguage = 'es' | 'en';

export const getCurrentLanguage = (): PortfolioLanguage =>
	document.documentElement.dataset.language === 'en' ? 'en' : 'es';

export const applyLanguage = (language: PortfolioLanguage, persist = false) => {
	document.documentElement.dataset.language = language;
	document.documentElement.lang = language;

	document.querySelectorAll<HTMLElement>('[data-i18n-es][data-i18n-en]').forEach((element) => {
		const value = language === 'en' ? element.dataset.i18nEn : element.dataset.i18nEs;
		if (value !== undefined) element.textContent = value;
	});

	document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder-es][data-i18n-placeholder-en]').forEach((element) => {
		const value = language === 'en' ? element.dataset.i18nPlaceholderEn : element.dataset.i18nPlaceholderEs;
		if (value !== undefined) element.placeholder = value;
	});

	document.querySelectorAll<HTMLElement>('[data-i18n-label-es][data-i18n-label-en]').forEach((element) => {
		const value = language === 'en' ? element.dataset.i18nLabelEn : element.dataset.i18nLabelEs;
		if (value !== undefined) element.setAttribute('aria-label', value);
	});

	document.querySelectorAll<HTMLElement>('[data-language-copy]').forEach((element) => {
		element.hidden = element.dataset.languageCopy !== language;
	});

	document.querySelectorAll<HTMLElement>('[data-language-option]').forEach((option) => {
		const active = option.dataset.languageOption === language;
		option.classList.toggle('opacity-40', !active);
		option.classList.toggle('font-black', active);
		option.setAttribute('aria-hidden', String(!active));
	});

	const toggle = document.querySelector<HTMLButtonElement>('[data-language-toggle]');
	if (toggle) {
		toggle.setAttribute('aria-label', language === 'es' ? 'Cambiar el sitio a inglés' : 'Switch the site to Spanish');
		toggle.setAttribute('title', language === 'es' ? 'Cambiar a inglés' : 'Cambiar a español');
	}

	if (persist) {
		try {
			localStorage.setItem('portfolio-language', language);
		} catch {
			// The preference remains active for the current page when storage is unavailable.
		}
	}

	window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: { language } }));
};

export const initializeLanguage = () => applyLanguage(getCurrentLanguage());
