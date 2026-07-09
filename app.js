// ======================================================
// FanAtlas
// app.js
// ======================================================

const map = L.map("map").setView(
    CONFIG.center,
    CONFIG.zoom
);

// ------------------------------------------------------
// UI Elements
// ------------------------------------------------------

const fanPanel = document.getElementById("fanPanel");
const fanName = document.getElementById("fanName");
const fanLatitude = document.getElementById("fanLatitude");
const fanLongitude = document.getElementById("fanLongitude");
const statusBar = document.getElementById("statusBar");

// ------------------------------------------------------
// Base Map
// ------------------------------------------------------

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "© OpenStreetMap contributors"
    }
).addTo(map);

// ------------------------------------------------------
// Temporary Fan Marker
// ------------------------------------------------------

let temporaryFanMarker = null;

// ------------------------------------------------------
// Click on Map
// ------------------------------------------------------

map.on("click", function (event) {

    if (temporaryFanMarker) {
        map.removeLayer(temporaryFanMarker);
    }

    temporaryFanMarker = L.circleMarker(event.latlng, {

        radius: 10,

        color: "#6CABDD",

        fillColor: "#6CABDD",

        fillOpacity: 0.90,

        weight: 2

    }).addTo(map);

    temporaryFanMarker.bindPopup(
        `
        <strong>New Fan</strong><br>
        Latitude: ${event.latlng.lat.toFixed(6)}<br>
        Longitude: ${event.latlng.lng.toFixed(6)}
        `
    );

    temporaryFanMarker.openPopup();

    // Show panel
    fanPanel.classList.remove("hidden");

    // Store coordinates (hidden fields)
    fanLatitude.value = event.latlng.lat.toFixed(6);
    fanLongitude.value = event.latlng.lng.toFixed(6);

    // Update status bar
    statusBar.innerHTML =
        `Latitude: ${fanLatitude.value}
        &nbsp;&nbsp;&nbsp;
        Longitude: ${fanLongitude.value}`;

    // Cursor directly in Name field
    fanName.focus();

});

// ------------------------------------------------------
// Close Button
// ------------------------------------------------------

document
    .getElementById("closeFanPanel")
    .addEventListener("click", function () {

        fanPanel.classList.add("hidden");

    });

// ------------------------------------------------------
// ESC closes panel
// ------------------------------------------------------

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        fanPanel.classList.add("hidden");

    }

});