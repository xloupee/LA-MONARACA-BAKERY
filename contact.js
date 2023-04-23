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
        threshold: 0.2,
    });

    observer.observe(animatedSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const content = document.getElementById("content");

    toggleButton.addEventListener("click", function () {
        content.classList.toggle("hidden");
        toggleButton.textContent = content.classList.contains("hidden") ? "More Locations" : "Hide Content";
    });
});