const foodSelect = document.getElementById("foodSelect");
const nutritionResult = document.getElementById("nutritionResult");

const nutritionData = {
    beans: {
        benefit: "Rich in protein and fiber.",
        calories: "347 calories per 100g",
        vitamin: "Contains folate and iron."
    },

    yam: {
        benefit: "Provides healthy carbohydrates and energy.",
        calories: "118 calories per 100g",
        vitamin: "Contains Vitamin C and potassium."
    },

    fish: {
        benefit: "Excellent source of protein and omega-3.",
        calories: "206 calories per 100g",
        vitamin: "Contains Vitamin D and B12."
    },

    rice: {
        benefit: "Good source of energy.",
        calories: "130 calories per 100g",
        vitamin: "Contains small amounts of B vitamins."
    }
};

foodSelect.addEventListener("change", () => {
    const selectedFood = foodSelect.value;

    if (!selectedFood) {
        nutritionResult.innerHTML = "";
        return;
    }

    const food = nutritionData[selectedFood];

    nutritionResult.innerHTML = `
        <div class="nutrition-card">
            <h3>${selectedFood.charAt(0).toUpperCase() + selectedFood.slice(1)}</h3>
            <p><strong>Benefit:</strong> ${food.benefit}</p>
            <p><strong>Calories:</strong> ${food.calories}</p>
            <p><strong>Nutrients:</strong> ${food.vitamin}</p>
        </div>
    `;
});