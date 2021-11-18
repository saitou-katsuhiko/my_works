document.addEventListener('DOMContentLoaded', function() {

    const els = document.querySelectorAll('.tween-animate-title');

    const cb = function(entries, observer) {
        //alert('intersecting');
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const ta = new TweenTextAnimation(entry.target);
                ta.animate();
                observer.unobserve(entry.target);
            } else {

            }
        });
    }
    const option = {
        root: null,
        rootMargin: "-200px 0px",
        //threshold: ,
    };
    
    const io = new IntersectionObserver(cb, option);
    els.forEach(el => io.observe(el));
    //io.observe(child1);
    //io.observe(child2);
});


