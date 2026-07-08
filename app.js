// ==========================
// FanAtlas
// ==========================

const map = L.map("map").setView(
    CONFIG.center,
    CONFIG.zoom
);

const supporterPanel =
    document.getElementById("supporterPanel");

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "© OpenStreetMap contributors"
    }
).addTo(map);


// ------------------------------------
// Temporary supporter location
// ------------------------------------

let temporaryMarker = null;

map.on("click", function (event) {

    if (temporaryMarker) {
        map.removeLayer(temporaryMarker);
    }

    temporaryMarker = L.circleMarker(event.latlng, {

        radius: 10,

        color: "#6CABDD",

        fillColor: "#6CABDD",

        fillOpacity: 0.9,

        weight: 2

    }).addTo(map);

    temporaryMarker.bindPopup(
        `
        <strong>New Supporter</strong><br>
        Latitude: ${event.latlng.lat.toFixed(6)}<br>
        Longitude: ${event.latlng.lng.toFixed(6)}
        `
    );

    temporaryMarker.openPopup();
    
    supporterPanel.classList.remove("hidden");

    document.getElementById("statusBar").innerHTML =
    `Latitude: ${event.latlng.lat.toFixed(6)}
     &nbsp;&nbsp;&nbsp;
     Longitude: ${event.latlng.lng.toFixed(6)}`;

});

document
    .getElementById("closePanel")
    .addEventListener("click", function(){

        supporterPanel.classList.add("hidden");

});