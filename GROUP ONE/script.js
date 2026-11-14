// 1. Sample Data: 8 Realistic Records
const rooms = [
    { id: 1, name: "LT 1", building: "Main Block", capacity: 150, facilities: ["Projector", "Whiteboard"], available: true },
    { id: 2, name: "LT 2", building: "Main Block", capacity: 120, facilities: ["Projector", "ChalkBoard"], available: false },
    { id: 3, name: "Seminar Room A", building: "Science Block", capacity: 50, facilities: ["Projector", "Whiteboard"], available: true },
    { id: 4, name: "Computer Lab 1", building: "ICT Center", capacity: 80, facilities: ["Computers", "Projector", "AC"], available: true },
    { id: 5, name: "Lecture Hall B", building: "Arts Block", capacity: 200, facilities: ["Projector", "AC"], available: true },
    { id: 6, name: "Computer Lab 3", building: "Science Block", capacity: 60, facilities: ["Smartboard", "Projector", "AC"], available: false },
    { id: 7, name: "Computer Lab 2", building: "ICT Center", capacity: 100, facilities: ["Computers", "AC", "Projector"], available: true },
    { id: 8, name: "Conference Room", building: "Science Block", capacity:500, facilities: ["Projector", "AC", "Whiteboard"], available: true }
];

// DOM Elements
const roomContainer = document.getElementById('room-container');
const searchInput = document.getElementById('search-input');
const capacityFilter = document.getElementById('capacity-filter');
const facilityFilter = document.getElementById('facility-filter');
const clearFiltersBtn = document.getElementById('clear-filters');
const statusMessage = document.getElementById('status-message');
const recommenderForm = document.getElementById('recommender-form');
const recommendationResult = document.getElementById('recommendation-result');

// --- FUNCTION 1: Render Rooms (Calculation/Status Summarisation) ---
function renderRooms(roomsToDisplay) {
    roomContainer.innerHTML = ''; // Clear current content

    if (roomsToDisplay.length === 0) {
        showStatusMessage("No rooms found matching your criteria. Please adjust your search.", "error");
        return;
    }

    showStatusMessage(`Showing ${roomsToDisplay.length} room(s).`, "success");

    roomsToDisplay.forEach(room => {
        const card = document.createElement('article');
        card.className = 'room-card';
        
        // Determine status class and text
        const statusClass = room.available ? 'status-available' : 'status-occupied';
        const statusText = room.available ? 'Available' : 'Occupied';

        card.innerHTML = `
            <div>
                <h3>${room.name}</h3>
                <div class="room-details">
                    <p><strong>Building:</strong> ${room.building}</p>
                    <p><strong>Capacity:</strong> ${room.capacity} students</p>
                    <p><strong>Facilities:</strong> ${room.facilities.join(', ')}</p>
                </div>
            </div>
            <span class="status-badge ${statusClass}">${statusText}</span>
        `;
        roomContainer.appendChild(card);
    });
}

// --- FUNCTION 2: Filter and Search Rooms (User Action) ---
function filterRooms() {
    const searchTerm = searchInput.value.toLowerCase();
    const minCapacity = parseInt(capacityFilter.value) || 0;
    const requiredFacility = facilityFilter.value;

    const filtered = rooms.filter(room => {
        // Search by room name or building
        const matchesSearch = room.name.toLowerCase().includes(searchTerm) || 
                              room.building.toLowerCase().includes(searchTerm);
        
        // Filter by capacity (room capacity must be >= required)
        const matchesCapacity = room.capacity >= minCapacity;
        
        // Filter by facility
        const matchesFacility = requiredFacility === "" || room.facilities.includes(requiredFacility);

        return matchesSearch && matchesCapacity && matchesFacility;
    });

    renderRooms(filtered);
}

// --- FUNCTION 3: Check Availability & Recommend ---
function recommendRoom(event) {
    event.preventDefault(); // Stop form from refreshing page

    const requiredCapacity = parseInt(document.getElementById('required-capacity').value);
    const preferredPeriod = document.getElementById('preferred-period').value;
    
    // Form Validation
    if (requiredCapacity <= 0) {
        recommendationResult.className = 'rec-error';
        recommendationResult.textContent = "Error: Please enter a valid class size greater than 0.";
        return;
    }

    // Comparison Logic: Find rooms that are available AND meet capacity
    const suitableRooms = rooms.filter(room => room.available && room.capacity >= requiredCapacity);

    if (suitableRooms.length === 0) {
        recommendationResult.className = 'rec-error';
        recommendationResult.textContent = `Error: No available rooms can accommodate ${requiredCapacity} students.`;
    } else {
        // Sort suitable rooms by capacity (smallest adequate room first) to be resource-efficient
        suitableRooms.sort((a, b) => a.capacity - b.capacity);
        
        const recommendedList = suitableRooms.map(r => `${r.name} (${r.building}) - Cap: ${r.capacity}`).join(' | ');
        
        recommendationResult.className = 'rec-success';
        recommendationResult.textContent = `Success! For ${requiredCapacity} students in the ${preferredPeriod}, we recommend: ${recommendedList}`;
    }
}

// Helper function for UI states
function showStatusMessage(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = type === 'error' ? 'status-error' : 'status-success';
}

// --- Event Listeners ---
// Search and Filter inputs trigger filterRooms on input
searchInput.addEventListener('change', filterRooms);
capacityFilter.addEventListener('change', filterRooms);
facilityFilter.addEventListener('change', filterRooms);

// Clear filters button
clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    capacityFilter.value = '';
    facilityFilter.value = '';
    renderRooms(rooms); // Reset to show all
});

// Recommender Form submit
recommenderForm.addEventListener('submit', recommendRoom);

// --- Initial Load ---
// Show all 8 rooms when the page first loads
renderRooms(rooms);