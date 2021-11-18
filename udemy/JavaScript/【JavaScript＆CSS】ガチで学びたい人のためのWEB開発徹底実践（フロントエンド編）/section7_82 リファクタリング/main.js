document.addEventListener('DOMContentLoaded', function() {

    const cb = function(el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }

    }

    const so = new ScrollObserver('.tween-animate-title', cb)
    //so.destroy();
    // const cb = function(entries, observer) {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting) {
    //             const ta = new TweenTextAnimation(entry.target);
    //             ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {

    //         }
    //     });
    // }

    // const option = {
    //     root: null,
    //     rootMargin: "-200px 0px",
    //     //threshold: ,
    // };
    

    //io.observe(child1);
    //io.observe(child2);
});


class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true,
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }
    _init() {
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // const ta = new TweenTextAnimation(entry.target);
                    // ta.animate();

                    this.cb(entry.target, true);
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);

                }
            });
        }

        this.io = new IntersectionObserver(callback.bind(this), this.option);
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}