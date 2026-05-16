const url = 'data/members.json';

const cards = document.querySelector('#members');

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data.members);
}

getMembers();

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement('section');

        card.classList.add('member-card');

        card.innerHTML = `
            <h2>${member.name}</h2>

            <img src="images/${member.image}" alt="${member.name}">

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>Membership:</strong> ${member.membership}</p>
        `;

        cards.appendChild(card);
    });
}

/* GRID & LIST TOGGLE */

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

gridButton.addEventListener('click', () => {
    cards.classList.add('grid-view');
    cards.classList.remove('list-view');
});

listButton.addEventListener('click', () => {
    cards.classList.add('list-view');
    cards.classList.remove('grid-view');
});