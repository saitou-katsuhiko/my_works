
class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}
class TweenTextAnimateion extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }
    animate() {
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            });
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const els = document.querySelectorAll('.tween-animate-title');
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {

                const ta = new TweenTextAnimateion(entry.target);
                ta.animate();
                observer.unobserve(entry.target);

            } else {

            }
        });
    }
    const options = {
        root: null,
        rootMargin: "-200px 0px",
    };
    
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
});