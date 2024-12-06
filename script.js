document.addEventListener("DOMContentLoaded", () => {
    // Typing effect for the headline
    const typingEffect = document.getElementById("typing-effect");
    const phrases = ["Welcome!", "Explore My Projects", "Learn About Me"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;

    function typePhrase() {
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
            typingEffect.textContent += phrases[currentPhraseIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(typePhrase, 100);
        } else {
            setTimeout(() => {
                currentCharIndex = 0;
                typingEffect.textContent = "";
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                typePhrase();
            }, 2000);
        }
    }
    typePhrase();

    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // Project filtering
    const projectFilter = document.getElementById("project-filter");
    const projectSearch = document.getElementById("project-search");
    const projectItems = document.querySelectorAll(".project-item");

    function filterProjects() {
        const filterValue = projectFilter.value;
        const searchValue = projectSearch.value.toLowerCase();

        projectItems.forEach(item => {
            const matchesFilter = filterValue === "all" || item.dataset.category === filterValue;
            const matchesSearch = item.textContent.toLowerCase().includes(searchValue);
            item.style.display = matchesFilter && matchesSearch ? "block" : "none";
        });
    }

    projectFilter.addEventListener("change", filterProjects);
    projectSearch.addEventListener("input", filterProjects);

    // Contact form validation
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for reaching out! Your message has been sent.");
        contactForm.reset();
    });
});
