const spotlightContainer = document.querySelector('#spotlight-container');

async function getSpotlights() {
    const response = await fetch('data/members.json'); // now using members.json
    const data = await response.json();

    // filter only Gold and Silver members
    const filtered = data.members.filter(member => 
        member.membership === "Gold" || member.membership === "Silver"
    );

    displaySpotlights(filtered);
}

function displaySpotlights(members) {
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        card.innerHTML = `
            <h3 class="business-name">${member.name}</h3>
            <hr>
            <div class="spotlight-content">
                <div class="spotlight-image">
                    <img src="images/${member.image}" alt="${member.name}" loading="lazy">
                </div>
                <div class="spotlight-info">
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            </div>
        `;

        spotlightContainer.appendChild(card);
    });
}

// run the function
getSpotlights();
