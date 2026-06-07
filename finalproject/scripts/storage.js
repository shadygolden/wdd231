
// ===========================
// DISPLAY FORM DATA
// ===========================
const params = new URLSearchParams(window.location.search);

const name = params.get("fullname");
const email = params.get("email");
const favorite = params.get("favorite");

const output = document.getElementById("userInfo");

if (name || email || favorite) {
    output.innerHTML = `
            <h2>Your Submission Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Favorite Dish:</strong> ${favorite}</p>
        `;
} else {
    output.innerHTML = "<p>No submission data found.</p>";
}