const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Modal elements
const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");
const modalInstructions = document.getElementById("modalInstructions");
const closeModal = document.getElementById("closeModal");

let allRecipes = [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

/* =========================
   FETCH RECIPES (API/JSON)
========================= */
async function getRecipes() {
    try {
        const response = await fetch("data/recipes.json");

        if (!response.ok) {
            throw new Error("Failed to load recipes");
        }

        const data = await response.json();
        allRecipes = data;

        displayRecipes(allRecipes);

    } catch (error) {
        console.error("Error loading recipes:", error);
        container.innerHTML = `<p>Unable to load recipes. Please try again later.</p>`;
    }
}

/* =========================
   DISPLAY RECIPES
========================= */
function displayRecipes(recipes) {
    container.innerHTML = "";

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            
            <h3>${recipe.name}</h3>

            <p><strong>Category:</strong> ${recipe.category}</p>
            <p><strong>Time:</strong> ${recipe.time}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>

            <button class="viewBtn" data-id="${recipe.id}">
                View Recipe
            </button>

            <button class="favBtn" data-id="${recipe.id}">
                ❤ Favorite
            </button>
        `;

        container.appendChild(card);
    });

    addEventListeners();
}

/* =========================
   EVENT LISTENERS
========================= */
function addEventListeners() {

    // View recipe modal
    document.querySelectorAll(".viewBtn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            openModal(id);
        });
    });

    // Favorites
    document.querySelectorAll(".favBtn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            saveFavorite(id);
        });
    });
}

/* =========================
   MODAL FUNCTION
========================= */
function openModal(id) {
    const recipe = allRecipes.find(r => r.id == id);

    modalTitle.textContent = recipe.name;
    modalImage.src = recipe.image;
    modalImage.alt = recipe.name;
    modalDescription.textContent = recipe.description;

    modalIngredients.innerHTML = "";
    recipe.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        modalIngredients.appendChild(li);
    });

    modalInstructions.textContent = recipe.instructions;

    modal.showModal();
}

/* Close modal */
closeModal.addEventListener("click", () => {
    modal.close();
});

/* =========================
   SEARCH FUNCTION
========================= */
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(value)
    );

    displayRecipes(filtered);
});

/* =========================
   CATEGORY FILTER
========================= */
categoryFilter.addEventListener("change", () => {
    const value = categoryFilter.value;

    if (value === "all") {
        displayRecipes(allRecipes);
    } else {
        const filtered = allRecipes.filter(recipe =>
            recipe.category.toLowerCase() === value.toLowerCase()
        );

        displayRecipes(filtered);
    }
});

/* =========================
   LOCAL STORAGE (FAVORITES)
========================= */
function saveFavorite(id) {
    const exists = favorites.includes(id);

    if (!exists) {
        favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Recipe added to favorites!");
    } else {
        alert("Already in favorites!");
    }
}

/* =========================
   INIT
========================= */
getRecipes();