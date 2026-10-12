/* Banzo: mobile menu toggle + sticky-header shadow. No jQuery. */
(function () {
	var toggle = document.querySelector('.banzo-nav-toggle');
	var nav = document.getElementById('banzo-nav');
	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			var open = toggle.getAttribute('aria-expanded') === 'true';
			toggle.setAttribute('aria-expanded', String(!open));
			nav.classList.toggle('is-open', !open);
			document.body.classList.toggle('banzo-nav-open', !open);
		});
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && nav.classList.contains('is-open')) {
				toggle.click();
				toggle.focus();
			}
		});
	}
	var header = document.querySelector('.banzo-header');
	if (header) {
		var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
	}
})();
