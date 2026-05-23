const spotlightContainer = document.querySelector('#spotlight-container');

async function getSpotlights() {
    const response = await fetch('data/members2.json'); // updated file name
    const data = await response.json();

    const filtered = data.filter(member => member.membership >= 2);
    displaySpotlights(filtered);
}

function displaySpotlights(members) {
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();

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
