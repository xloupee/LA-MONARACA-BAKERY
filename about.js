document.addEventListener('DOMContentLoaded', function() {
    const animatedSectionLeft = document.getElementById('scroll-animated-section-left');
    const animatedSectionRight = document.getElementById('scroll-animated-section-right');
    const sections = [animatedSectionLeft, animatedSectionRight];

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, 
    });

    sections.forEach(function(section) {
        observer.observe(section);
    });
});
