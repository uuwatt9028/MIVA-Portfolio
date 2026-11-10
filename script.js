document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) return;

    function closeMenu() {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    }

    function openMenu() {
        navLinks.classList.add("open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation");
    }

    // Toggle mobile navigation menu
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.contains("open");
        isOpen ? closeMenu() : openMenu();
    });

    // Close menu on nav link clicks
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu when pressing Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("open")) {
            closeMenu();
        }
    });

    // Close menu when clicking outside header navigation
    document.addEventListener("click", (event) => {
        if (
            navLinks.classList.contains("open") &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Dynamic Year Update for Footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});