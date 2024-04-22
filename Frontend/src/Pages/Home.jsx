import { React, useEffect } from "react";
import "../assets/indexCSS.css";
import Header from "../components/Header";
import FeaturesSection from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
	const google = window.google;

	useEffect(() => {
		// Load the Google Maps JavaScript API script
		const script = document.createElement("script");
		script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`;
		script.async = true;
		script.onload = initMap;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	var map;
	var service;

	function initMap() {
		var pyrmont = new google.maps.LatLng(21.7041, 77.1025);
		map = new google.maps.Map(document.getElementById("map"), {
			center: pyrmont,
			zoom: 5,
		});

		const myButton = document.getElementById("currLocBtn");
		myButton.addEventListener("click", getCurrentLocation);
		function getCurrentLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					function (position) {
						console.log(position);

						var userLocation = {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						};

						const map = new google.maps.Map(document.getElementById("map"), {
							center: { lat: userLocation.lat, lng: userLocation.lng },
							zoom: 15,
						});

						let marker = new google.maps.Marker({
							map: map,
						});

						marker.setPosition(userLocation);
						marker.setVisible(true);

						var infoWindow = new google.maps.InfoWindow({
							content: "You are here",
							disableAutoPan: true,
							closeBox: false,
						});

						infoWindow.open(map, marker);

						const request = {
							location: new google.maps.LatLng(
								userLocation.lat,
								userLocation.lng
							),
							radius: 1000,
							type: ["hospital"],
						};

						const service = new google.maps.places.PlacesService(map);

						service.nearbySearch(request, (results, status) => {
							if (status === google.maps.places.PlacesServiceStatus.OK) {
								for (let i = 0; i < results.length; i++) {
									createMarker(results[i]);
									const nhosp = document.getElementById("nhos");
									const listItem = document.createElement("a");
									listItem.innerHTML = i + 1 + ". " + results[i].name;
									listItem.setAttribute("href", "login.html");
									listItem.setAttribute("target", "_blank");
									nhosp.appendChild(listItem);
								}
							} else {
								const nhosp = document.getElementById("nhos");
								nhosp.innerHTML =
									'<img src="sorry-img.png"><h2 style="margin-top: 25px;">No hospital nearby.</h2>';
							}
							function createMarker(place) {
								var marker = new google.maps.Marker({
									map: map,
									position: place.geometry.location,
								});

								google.maps.event.addListener(marker, "click", function () {
									alert(place.name);
									window.open(place.photos[0].getUrl(), "_blank");
								});
							}
						});
					},
					function () {
						alert("Please allow location access");
					}
				);
			}
		}

		var input = document.getElementById("searchTextField");
		let autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.bindTo("bounds", map);
		console.log(autocomplete);

		let marker = new google.maps.Marker({
			map: map,
		});

		google.maps.event.addListener(autocomplete, "place_changed", () => {
			// clearMarkers();
			const nhosp = document.getElementById("nhos");
			nhosp.innerHTML = "";
			let place = autocomplete.getPlace();
			// console.log(place);
			// console.log(place.photos[0].getUrl());

			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(20);
			}

			marker.setPosition(place.geometry.location);
			marker.setVisible(true);

			let request = {
				location: place.geometry.location,
				radius: "1000",
				type: ["hospital"],
			};

			service = new google.maps.places.PlacesService(map);
			service.nearbySearch(request, callback);

			function callback(results, status) {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					for (var i = 0; i < results.length; i++) {
						createMarker(results[i]);
						const nhosp = document.getElementById("nhos");
						const listItem = document.createElement("a");
						listItem.innerHTML = i + 1 + ". " + results[i].name;
						listItem.setAttribute("href", "/hospitalDetails/" + results[i].name);
						listItem.setAttribute("target", "_blank");
						nhosp.appendChild(listItem);
					}
				} else {
					const nhosp = document.getElementById("nhos");
					nhosp.innerHTML =
						'<img src="sorry-img.png"><h2 style="margin-top: 25px;">No hospital nearby.</h2>';
				}
			}

			function createMarker(place) {
				var marker = new google.maps.Marker({
					map: map,
					position: place.geometry.location,
				});

				google.maps.event.addListener(marker, "click", function () {
					alert(place.name);
					try {
						window.open(place.photos[0].getUrl(), "_blank");
					} catch {
						alert("No photos");
					}
				});
			}
		});
	}

	return (
		<div>
			<Header />
			<div id="search">
				<input type="text" id="searchTextField" size="50" />
				<input type="button" value="Current Location📍" id="currLocBtn" />
			</div>
			<div class="map-div">
				<div id="map"></div>
				<div id="nearhosp">
					<h5 id="nhead">Nearby Hospitals</h5>
					<div>
						<ol id="nhos"></ol>
					</div>
				</div>
			</div>

			<FeaturesSection />
			<About />
			<Footer />
		</div>
	);
}

export default Home;
