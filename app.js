document.addEventListener('DOMContentLoaded', function() {
    const animatedSection = document.getElementById('scroll-animated-section');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animatedSection.classList.add('visible');
                observer.unobserve(animatedSection);
            }
        });
    }, {
        threshold: 0.25, // 
    });

    observer.observe(animatedSection);
});

