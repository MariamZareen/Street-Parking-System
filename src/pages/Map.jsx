// import React from 'react'
import Navbar from './Navbar';
// export default function Map() {
//        // Initialize the map with a default location (e.g., India)
//        var map = L.map('map').setView([20.5937, 78.9629], 20);

//        // Add a tile layer (e.g., OpenStreetMap)
//        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//        }).addTo(map);

//        // Function to update the map with new coordinates and a higher zoom level
//        function updateMap(latitude, longitude) {
//            // Remove existing markers (if any)
//            map.eachLayer(function (layer) {
//                if (layer instanceof L.Marker) {
//                    map.removeLayer(layer);
//                }
//            });

//            // Create a new marker and add it to the map
//            var newMarker = L.marker([latitude, longitude]).addTo(map);

//            // Add a popup to the marker
//            newMarker.bindPopup("Parking Spot Information").openPopup();

//            // Set the map view to the new coordinates with a higher zoom level (e.g., 15)
//            map.setView([latitude, longitude], 15);
//        }

//        // Replace 'YOUR_AZURE_MAPS_API_KEY' with your actual Azure Maps API key
//        const azureMapsApiKey = 'Y6gM4drltLIVVYNTbwVaCyJpc03Jd5ND0e_wCQLpSBc';

//        const form = document.querySelector('form');
//        const locationInput = document.querySelector('#location');
//        const useCurrentLocationButton = document.querySelector('#useCurrentLocation');

//        async function searchNearbyPoliceStations(latitude, longitude) {
//            try {
//                // Define the search parameters for police stations
//                const searchParams = {
//                    query: "police station",
//                    limit: 5, // Limit the number of results
//                    radius: 5000, // Search within a radius of 5 kilometers (adjust as needed)
//                };

//                // Make a request to the Azure Maps Search API for police stations
//                const response = await fetch(`https://atlas.microsoft.com/search/fuzzy/json?api-version=1.0&subscription-key=${azureMapsApiKey}&lat=${latitude}&lon=${longitude}&${new URLSearchParams(searchParams)}`);
//                const data = await response.json();

//                if (data.results && data.results.length > 0) {
//                    // Loop through the results and add big brown circle markers for police stations
//                    data.results.forEach(result => {
//                        const policeStationLatitude = result.position.lat;
//                        const policeStationLongitude = result.position.lon;

//                        // Create a circle marker for the police station and add it to the map
//                        L.circle([policeStationLatitude, policeStationLongitude], {
//                            color: 'brown', // Customize the color as needed
//                            fillColor: 'brown', // Customize the fill color as needed
//                            fillOpacity: 0.7,
//                            radius: 100, // Customize the radius as needed (e.g., 100 meters)
//                            opacity: 1,
//                        })
//                        .addTo(map);
//                    });
//                } else {
//                    console.error('No nearby police stations found.');
//                }
//            } catch (error) {
//                console.error('Error fetching police station data:', error);
//            }
//        }

//        form.addEventListener('submit', async (e) => {
//            e.preventDefault();
//            const location = locationInput.value;

//            try {
//                const response = await fetch(`https://atlas.microsoft.com/search/fuzzy/json?api-version=1.0&subscription-key=${azureMapsApiKey}&query=${location}`);
//                const data = await response.json();

//                if (data.results && data.results.length > 0) {
//                    const latitude = data.results[0].position.lat;
//                    const longitude = data.results[0].position.lon;

//                    // Update the map with the new coordinates
//                    updateMap(latitude, longitude);

//                    // Search for nearby police stations based on the coordinates
//                    searchNearbyPoliceStations(latitude, longitude);

//                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//                } else {
//                    console.error('Location not found');
//                }
//            } catch (error) {
//                console.error('Error:', error);
//            }
//        });

//        // Handle "Use Current Location" button click
//        useCurrentLocationButton.addEventListener('click', () => {
//            if ('geolocation' in navigator) {
//                navigator.geolocation.getCurrentPosition((position) => {
//                    const latitude = position.coords.latitude;
//                    const longitude = position.coords.longitude;

//                    // Update the map with the current location coordinates
//                    updateMap(latitude, longitude);

//                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//                }, (error) => {
//                    console.error('Error getting current location:', error);
//                });
//            } else {
//                console.error('Geolocation is not supported by this browser.');
//            }
//        });

//   return (
//     <div>
//         <header>
//         <h1>Street Parking System</h1>
//         <nav>
//             <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">Search</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </nav>
//     </header>
    
//     <main>
//         <section>
//             <h2>Welcome to our Street Parking System</h2>
//             <p>Find available street parking spots in your area.</p>
//         </section>
        
//         <section>
//             <h2>Search for Parking</h2>
//             <form>
//                 <label for="location">Location:</label>
//                 <input type="text" id="location" name="location" placeholder="Enter location (e.g., India)"/>
//                 <button type="submit">Search</button>
//                 <button type="button" id="useCurrentLocation">Use Current Location</button>
//             </form>
            
//         </section>
//     </main>
//     <div id="map" style="height: 400px;"></div>

//     <footer>
//         <p>Contact us at <a href="mailto:info@streetparking.com">info@streetparking.com</a></p>
//         <p>&copy; 2023 Street Parking System</p>
//     </footer>  
//     </div>
//   )
// }
import React from 'react'

export default function Map() {
    <Navbar/>
  return (
    <div>
      <h1 className='text-4xl m-auto'>Thhis is rendered from Map.jsx</h1>
    </div>
  )
}

