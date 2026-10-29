lucide.createIcons();

const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebarBackdrop");
const openButton = document.getElementById("openSidebar");
const closeButton = document.getElementById("closeSidebar");


// Mobile reactive - Navbar
function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    backdrop.classList.remove("hidden");
    openButton.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
    openButton.setAttribute("aria-expanded", "false");
}

openButton.addEventListener("click", openSidebar);
closeButton.addEventListener("click", closeSidebar);
backdrop.addEventListener("click", closeSidebar);

sidebar.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", closeSidebar);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeSidebar();
});


// Date and Time

const now = new Date();

document.getElementById("currentDate").textContent =
    now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

document.getElementById("currentMonth").textContent =
    now.toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric"
    });

document.getElementById("currentYear").textContent =
    now.getFullYear();

// Dashboard amounts are placeholders until transaction storage is added.

// These controls are intentionally not connected to a transaction form yet.
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    const activeClasses = [
        "bg-[#5CFF7A]/10",
        "text-[#5CFF7A]"
    ];

    navLinks.forEach(link => {
        const href = link.getAttribute("href");

        // Skip links that only point to sections on a page
        if (!href || href.startsWith("#")) {
            return;
        }

        // Compare the link destination with the current page
        const linkPath = new URL(href, window.location.href)
            .pathname
            .toLowerCase();

        const currentPath = window.location.pathname.toLowerCase();
        const isActive = linkPath === currentPath;

        if (isActive) {
            link.classList.add(...activeClasses);
            link.classList.remove("text-[#B9C2BA]");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove(...activeClasses);
            link.classList.add("text-[#B9C2BA]");
            link.removeAttribute("aria-current");
        }
    });
});