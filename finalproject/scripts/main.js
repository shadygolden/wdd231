// =============================
// MOBILE NAVIGATION TOGGLE
// =============================
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Close menu when clicking a link (mobile UX improvement)
document.querySelectorAll("#navigation a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});


// =============================
// FEATURED RECIPE MODAL (INDEX PAGE)
// =============================
const featuredBtn = document.getElementById("featuredBtn");
const modal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");

// Open modal
if (featuredBtn) {
    featuredBtn.addEventListener("click", () => {
        modal.showModal();
    });
}

// Close modal
if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}

// Close modal when clicking outside content
if (modal) {
    modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();

        const clickedOutside =
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom;

        if (clickedOutside) {
            modal.close();
        }
    });
}


// =============================
// SEARCH FUNCTION (INDEX PAGE)
// =============================
const searchInput = document.getElementById("recipeSearch");

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        const cards = document.querySelectorAll(".recipe-card");

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// =============================
// LOCAL STORAGE PREPARATION (OPTIONAL BASE HOOK)
// =============================
if (!localStorage.getItem("visited")) {
    localStorage.setItem("visited", "true");
    console.log("First visit stored in localStorage");
}


