document.addEventListener("DOMContentLoaded", () => {
    let members = []; // Store members globally

    // Fetch members data from the JSON file
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json'); // Ensure path is correct
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching members:", error);
            document.getElementById('directory').innerHTML = '<p>No members to display.</p>';
        }
    }

    // Display members in the grid or list view
    function displayMembers(members, view = "grid") {
        const directory = document.getElementById('directory');
        directory.className = view;

        if (members.length === 0) {
            directory.innerHTML = '<p>No members to display.</p>';
            return;
        }

        directory.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            </div>
        `).join('');
    }

    // Switch view between grid and list
    document.getElementById('grid-view').addEventListener('click', () => {
        displayMembers(members, 'grid');
    });

    document.getElementById('list-view').addEventListener('click', () => {
        displayMembers(members, 'list');
    });

    // Set the copyright year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Initial Fetch and Display Members
    fetchMembers();
});
