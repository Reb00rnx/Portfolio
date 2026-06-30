// Tap-to-highlight: mirrors :hover effects on touch devices, where hover
// doesn't fire reliably. Tapping a card/tag/link toggles an "is-active"
// class instead of requiring a tap-and-hold.
(function () {
    var HIGHLIGHT_SELECTOR = '.project-card, .skill-card, .skill-tag, .tech-tag, .contact-link';

    document.addEventListener('click', function (event) {
        var target = event.target.closest(HIGHLIGHT_SELECTOR);

        document.querySelectorAll('.is-active').forEach(function (el) {
            if (el !== target) {
                el.classList.remove('is-active');
            }
        });

        if (target) {
            target.classList.toggle('is-active');
        }
    });
})();
